const xlsxFile = require('read-excel-file/node');
var fs = require('fs');

xlsxFile('./CORES HEX - R00.xlsx').then((rows) => {
    
    var dir = './Código sass cores';
    var classHomeFinal = [];
    var classFiltersFinal = [];
    var colors = [];
    var finalColors = [];
    var names = [];
    var finalNames = [];
    var result = {};
    
    rows.forEach((col) => {
        let hex = col[0];
        let initialNames = col[1];

        initialNames = initialNames.toLowerCase();
        initialNames = initialNames.replace('!', "-");
        initialNames = initialNames.replace(/'/g, '');
        initialNames = initialNames.replace(/’/g, '');
        initialNames = initialNames.split(' ').join('-');
        initialNames = initialNames.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        names.push(initialNames);

        hex = JSON.stringify(hex);
        hex = hex.replace('_', "");
        hex = hex.replace('_', "");
        hex = JSON.parse(hex);
        colors.push(hex);
    })
    console.log("teste");

    names.forEach((el) => {
        var name = "$" + el;
        finalNames.push(name);
    })

    colors.forEach((el) => {
        cor = "#" + el;
        finalColors.push(cor);
    })

    finalNames.forEach((key, i) => {
        result[key] = finalColors[i];
        var seletor = key;
        seletor = seletor.replace(/[$]+/g, '');
        
        var home = "&--"  + seletor +  " { " + "@ " + ".valueWrapper {  " + " @  " + "  background: " +  key + " !important; " + "@" + " } " + "@" + "}";
        var filter = "&--" + seletor  + " :global(.vtex-checkbox__label) {" + " % " + " &::before { " + " %  " + "  @include filter; " + "  %  " + "  background: " +  key + " !important; " + "% " + " } " + "%"+ "}";

        classHomeFinal.push(home);
        classFiltersFinal.push(filter);
    });
        
    result = JSON.stringify(result);
    result = result.replace(/['"]+/g, '');
    result = result.replace(/[:]+/g, ': ');
    result = result.replace(/[,]+/g, ';\n');

    classHomeFinal = JSON.stringify(classHomeFinal);
    classHomeFinal = classHomeFinal.replace(/[@]+/g, ' \n');
    classHomeFinal = classHomeFinal.replace(/[,]+/g, ';\n\n');
    classHomeFinal = classHomeFinal.replace(/["]+/g, '');

    classFiltersFinal = JSON.stringify(classFiltersFinal);
    classFiltersFinal = classFiltersFinal.replace(/[%]+/g, ' \n');
    classFiltersFinal = classFiltersFinal.replace(/[,]+/g, ';\n\n');
    classFiltersFinal = classFiltersFinal.replace(/["]+/g, '');

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, (err) => {
            if(err) throw err;
        });
    }
    
    fs.writeFile('./Código sass cores/color.txt', result , function (err) {
        if (err) throw err;
    });

    fs.writeFile('./Código sass cores/home.txt', classHomeFinal , function (err) {
        if (err) throw err;
    });
    
    fs.writeFile('./Código sass cores/filter.txt', classFiltersFinal , function (err) {
        if (err) throw err;
        console.log('\n\nBem sucedido! Pasta com códigos criada.\n');
    });
})



