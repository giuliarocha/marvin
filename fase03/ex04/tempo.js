function tempo(data1, data2, unidade){
    var hoje = new Date (data1);
    var amanha = new Date (data2);
    switch(unidade){
        case "dia":
            var tempo2 = Math.abs(hoje.getTime() - amanha.getTime())/1000/60/60/24;
            return Math.round(tempo2);
        case "mês":
            var tempo3 = Math.abs(hoje.getTime() - amanha.getTime())/1000/60/60/24/30;
            return Math.round(tempo3);
        case "ano":
            var tempo4 = Math.abs(hoje.getTime() - amanha.getTime())/1000/60/60/24/365;
            return Math.round(tempo4);
            
    }
}
