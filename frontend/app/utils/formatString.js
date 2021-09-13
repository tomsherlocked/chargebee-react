/*
 * removes excess _ (chargebee API is full of them)
 */

export default function formatString(inputStr) {
  return inputStr.replaceAll('_', ' ');
}
