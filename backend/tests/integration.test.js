const request = require("supertest");
const app = require("../server");

describe("Integration Test", () => {
  it("GET /health should return OK", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe("OK");
  });
});
