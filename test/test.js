import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(__dirname, "..", process.env.MAIN) : path.join(__dirname, "..", "src"))
const {default: preventStart} = require(indexModule)

it("should run run for string", () => {
  const result = preventStart("abcd", "cd")
  expect(result).toEqual("ab")
})

it("should run run for arrays", () => {
  const result = preventStart(["a", "b", "c", "d"], ["c", "d"])
  expect(result).toEqual(["a", "b"])
})