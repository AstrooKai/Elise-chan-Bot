module.exports = {
  name: "$ISO",
  type: "djs",
  code: async d => {
    const { code } = d.util.aoiFunc(d);

    return {
      code: d.util.setCode({function: d.func, code, result: new Date().toISOString()})
    }
  }
}