import {
  CappedMap,
  create,
  deriveHmacKeySecret,
  randomInt,
} from 'altcha-lib/frameworks/nextjs'
import { deriveKey } from 'altcha-lib/algorithms/pbkdf2'
import { ALTCHA_ERROR_MESSAGE, ALTCHA_FIELD_NAME } from '@/lib/altcha-messages'

export { ALTCHA_ERROR_MESSAGE, ALTCHA_FIELD_NAME }

const MIN_SECRET_LENGTH = 32
const usedChallenges = new CappedMap<string, boolean>({ maxSize: 10_000 })

function getHmacSecret() {
  const secret = process.env.ALTCHA_HMAC_SECRET?.trim() ?? ''
  if (secret.length < MIN_SECRET_LENGTH) {
    throw new Error(
      `ALTCHA_HMAC_SECRET fehlt oder ist zu kurz (mindestens ${MIN_SECRET_LENGTH} Zeichen).`
    )
  }
  return secret
}

let altchaPromise: ReturnType<typeof createAltcha> | null = null

async function createAltcha() {
  const hmacSignatureSecret = getHmacSecret()
  const hmacKeySignatureSecret = await deriveHmacKeySecret(hmacSignatureSecret)

  return {
    hmacSignatureSecret,
    hmacKeySignatureSecret,
    instance: create({
      fieldName: ALTCHA_FIELD_NAME,
      hmacSignatureSecret,
      hmacKeySignatureSecret,
      deriveKey,
      store: usedChallenges,
      createChallengeParameters: () => ({
        algorithm: 'PBKDF2/SHA-256',
        cost: 5_000,
        counter: randomInt(5_000, 10_000),
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      }),
    }),
  }
}

async function getAltcha() {
  if (!altchaPromise) {
    altchaPromise = createAltcha()
  }
  return altchaPromise
}

export async function createAltchaChallengeResponse(request: Request) {
  const { instance } = await getAltcha()
  return instance.challengeHandler(request)
}

export async function verifyAltchaPayload(
  payload: unknown
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (typeof payload !== 'string' || !payload.trim()) {
    return { ok: false, error: ALTCHA_ERROR_MESSAGE }
  }

  try {
    const { instance, hmacSignatureSecret, hmacKeySignatureSecret } =
      await getAltcha()
    const result = await instance.verify(
      payload,
      deriveKey,
      hmacSignatureSecret,
      hmacKeySignatureSecret,
      usedChallenges
    )

    if (result.error || !result.verification?.verified) {
      return { ok: false, error: ALTCHA_ERROR_MESSAGE }
    }

    return { ok: true }
  } catch (error) {
    console.error('ALTCHA-Validierung fehlgeschlagen:', error)
    return { ok: false, error: ALTCHA_ERROR_MESSAGE }
  }
}
