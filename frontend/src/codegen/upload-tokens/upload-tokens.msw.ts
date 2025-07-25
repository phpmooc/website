/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"

import { HttpResponse, delay, http } from "msw"

import type { NewTokenResponse, TokensResponse } from ".././model"

export const getGetUploadTokensUploadTokensAppIdGetResponseMock = (
  overrideResponse: Partial<TokensResponse> = {},
): TokensResponse => ({
  tokens: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    id: faker.number.int({
      min: undefined,
      max: undefined,
      multipleOf: undefined,
    }),
    comment: faker.string.alpha({ length: { min: 10, max: 20 } }),
    app_id: faker.string.alpha({ length: { min: 10, max: 20 } }),
    scopes: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.string.alpha({ length: { min: 10, max: 20 } })),
    repos: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.string.alpha({ length: { min: 10, max: 20 } })),
    issued_at: faker.number.int({
      min: undefined,
      max: undefined,
      multipleOf: undefined,
    }),
    issued_to: faker.helpers.arrayElement([
      faker.string.alpha({ length: { min: 10, max: 20 } }),
      null,
    ]),
    expires_at: faker.number.int({
      min: undefined,
      max: undefined,
      multipleOf: undefined,
    }),
    revoked: faker.datatype.boolean(),
  })),
  is_direct_upload_app: faker.datatype.boolean(),
  ...overrideResponse,
})

export const getCreateUploadTokenUploadTokensAppIdPostResponseMock = (
  overrideResponse: Partial<NewTokenResponse> = {},
): NewTokenResponse => ({
  token: faker.string.alpha({ length: { min: 10, max: 20 } }),
  details: {
    id: faker.number.int({
      min: undefined,
      max: undefined,
      multipleOf: undefined,
    }),
    comment: faker.string.alpha({ length: { min: 10, max: 20 } }),
    app_id: faker.string.alpha({ length: { min: 10, max: 20 } }),
    scopes: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.string.alpha({ length: { min: 10, max: 20 } })),
    repos: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => faker.string.alpha({ length: { min: 10, max: 20 } })),
    issued_at: faker.number.int({
      min: undefined,
      max: undefined,
      multipleOf: undefined,
    }),
    issued_to: faker.helpers.arrayElement([
      faker.string.alpha({ length: { min: 10, max: 20 } }),
      null,
    ]),
    expires_at: faker.number.int({
      min: undefined,
      max: undefined,
      multipleOf: undefined,
    }),
    revoked: faker.datatype.boolean(),
  },
  ...overrideResponse,
})

export const getGetUploadTokensUploadTokensAppIdGetMockHandler = (
  overrideResponse?:
    | TokensResponse
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<TokensResponse> | TokensResponse),
) => {
  return http.get("*/upload-tokens/:appId", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getGetUploadTokensUploadTokensAppIdGetResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getCreateUploadTokenUploadTokensAppIdPostMockHandler = (
  overrideResponse?:
    | NewTokenResponse
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<NewTokenResponse> | NewTokenResponse),
) => {
  return http.post("*/upload-tokens/:appId", async (info) => {
    await delay(1000)

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === "function"
            ? await overrideResponse(info)
            : overrideResponse
          : getCreateUploadTokenUploadTokensAppIdPostResponseMock(),
      ),
      { status: 200, headers: { "Content-Type": "application/json" } },
    )
  })
}

export const getRevokeUploadTokenUploadTokensTokenIdRevokePostMockHandler = (
  overrideResponse?:
    | void
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<void> | void),
) => {
  return http.post("*/upload-tokens/:tokenId/revoke", async (info) => {
    await delay(1000)
    if (typeof overrideResponse === "function") {
      await overrideResponse(info)
    }
    return new HttpResponse(null, { status: 204 })
  })
}
export const getUploadTokensMock = () => [
  getGetUploadTokensUploadTokensAppIdGetMockHandler(),
  getCreateUploadTokenUploadTokensAppIdPostMockHandler(),
  getRevokeUploadTokenUploadTokensTokenIdRevokePostMockHandler(),
]
