
    let inputs = process.argv.slice(2);
    let result = inputs.map(first => first[0])
    let reduced = result.reduce((next, first) => next+first);
    console.log(`[${inputs}] becomes "${reduced}"`)


