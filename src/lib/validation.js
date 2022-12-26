const EMAIL_RGX = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i;

export const isValidEmailAddr = v => EMAIL_RGX.test(v);