import {exec, ShellString} from "shelljs"

export const execInFolder = (folder: string, command: string) => {
    return exec(`cd ${folder} && ${command}`, {
        silent: true
    })
}

export const ensureOutput = (execResponse: ShellString, errorString = "Command did not succeed") => {
    const out = execResponse.stdout.trim()
    if(out === ""){
        console.error(errorString)
        process.exit(1)
    }
    return out
}