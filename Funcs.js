const { readdirSync } = require('fs');

module.exports = {
  LoadCustomFunctions: (client) => {
    // * This will return a 'string[]'
    const CustomFunctions = readdirSync(`${process.cwd()}/customFuncs/`).filter((FileName) => FileName.endsWith(".js"));

    CustomFunctions.map((FunctionFile) => {
      const FunctionPath = `${process.cwd()}/customFuncs/${FunctionFile}`;
      // * If done correctly should return a '{ name: string; type: string; code: Promise<{ code: string }> }' object.
      const CustomFunction = require(FunctionPath);

      if (!CustomFunction?.name || !CustomFunction?.type || !CustomFunction?.code)
        return console.error({ message: `Failed to import a custom function due to missing name, type or code..`, path: FunctionPath });

      console.log({ message: `Loading the function: ${CustomFunction.name}` });
      client.functionManager.createFunction(CustomFunction);
    });
  }
};