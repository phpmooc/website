/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { TransactionStripeDataCard } from "./transactionStripeDataCard"

export interface TransactionStripeData {
  status: string
  client_secret: string
  card?: TransactionStripeDataCard
}
