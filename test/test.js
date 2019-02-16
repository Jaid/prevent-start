import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(__dirname, "..", process.env.MAIN) : path.join(__dirname, "..", "src"))
const {default: preventStart} = require(indexModule)

it("should run for string", () => {
  const result = preventStart("abcd", "ab")
  expect(result).toEqual("cd")
})

it("should run for arrays", () => {
  const result = preventStart(["a", "b", "c", "d"], ["a", "b"])
  expect(result).toEqual(["c", "d"])
})