import normalizeEmail from './emailNormalizer'
import nameNormalizer from './nameNormalizer'
import alphaNumNormalizer from './alphaNumNormalizer'
import booleanNormalizer from './booleanNormalizer'
import { numberNormalizer,
  numberNormalizerNoLeadingZero,
  numberNormalizerAsString } from './numberNormalizer'

export const normalizer = {
  nameNormalizer,
  normalizeEmail,
  booleanNormalizer,
  numberNormalizer,
  numberNormalizerNoLeadingZero,
  numberNormalizerAsString,
  alphaNumNormalizer
}
