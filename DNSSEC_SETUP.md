# DNSSEC Configuration for rbanmsfgc.edu.in

To enable DNSSEC, you must log in to your domain registrar (the company where you bought your domain name, e.g., GoDaddy, BigRock, Namecheap) and find the "DNSSEC" or "DS Records" section in their management panel.

Add a new DS Record with the following values:

| Field | Value |
|-------|-------|
| **Domain** | `rbanmsfgc.edu.in` |
| **Key Tag** | `2371` |
| **Algorithm** | `13` (ECDSAP256SHA256) |
| **Digest Type** | `2` (SHA-256) |
| **Digest** | `8D79CA2BDF9058B8A2CD10B6F2E6D241E8EB00978698894D2B6A194E8663857D` |
| **Public Key** | `mdsswUyr3DPW132mOi8V9xESWE8jTo0dxCjjnopKl+GqJxpVXckHAeF+KkxLbxILfDLUT0rAK9iUzy1L53eKGQ==` |
| **Flags** | `257` (KSK) |

## Full DS Record String
`rbanmsfgc.edu.in. 3600 IN DS 2371 13 2 8D79CA2BDF9058B8A2CD10B6F2E6D241E8EB00978698894D2B6A194E8663857D`

> **Note:** DNSSEC updates can take up to 24-48 hours to propagate globally.
