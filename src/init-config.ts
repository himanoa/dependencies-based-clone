import { writeFileSync } from "fs"
import { Config } from "./config"
import path from "path"

export const initConfig = () => {
  const config: Config = {
    rules: [{
      from: 'src/(.+).ts',
      to: 'src/$1.js'
    }],
    ignorePatterns: []
  }

  const configDestPath = path.join(process.cwd(), 'copymod.config.json')
  const body = JSON.stringify(config, null, 2)
  writeFileSync(configDestPath, body)
  console.log("Created copymod.config.json")
}
