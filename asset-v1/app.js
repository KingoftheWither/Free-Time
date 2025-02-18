var app = new function() {
    this.name = "Free Time", 
    this.version = "1",
    this.date = "2024", 
    this.folder = "asset-v1/", 
    this.looptime = 12800,
    this.bpm = 150, 
    this.totalframe = 260, 
    this.nbpolo = 7, 
    this.nbloopbonus = 2, 
    this.bonusloopA = !1, 
    this.bonusendloopA = !1,
    this.recmaxloop = 34, 
    this.recminloop = 4, 
    this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, 
    this.spritepolo = "polo-sprite.png", 
    this.spritepicto = "game-picto.png", 
    this.colBck = "#121212", 
    this.col0 = "#919191", 
    this.col1 = "#5f5f5f", 
    this.col2 = "#4b4b4b", 
    this.col3 = "#373737", 
    this.col4 = "#232323", 
    this.animearray = [
    {name: "01_Bits", color: "#03f0fc", uniqsnd: !0},
    {name: "07_Dash", color: "#03f0fc", uniqsnd: !1},
    {name: "08_Menac", color: "#03f0fc", uniqsnd: !0},
    {name: "11_Beep", color: "#03f0fc", uniqsnd: !0},
    {name: "12_Berm", color: "#03f0fc", uniqsnd: !0},
    {name: "13_Chipper", color: "#03f0fc", uniqsnd: !0},
    {name: "14_Deprss", color: "#03f0fc", uniqsnd: !1}], 
    this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
    var a = this.animearray[n].name;
    this.animearray[n].soundA = a + "_a", 
    this.animearray[n].soundB = 
    this.animearray[n].uniqsnd ? a + "_a" : a + "_b", 
    this.animearray[n].anime = a + "-sprite.png", 
    this.animearray[n].animeData = a + ".json"
    }
};
