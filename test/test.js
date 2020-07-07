var assert = require("assert");
var numberToWordsAr = require("../src/numberToWordsAr");

function parse(num) {
  return numberToWordsAr(num);
}

describe("Reading numbers from Zero to Bilons", function () {
  it("should read 0", function () {
    assert("صفر", parse());
  });
  it("should read 0", function () {
    assert("صفر", parse(0));
  });
  it("should read 1", function () {
    assert("واحد", parse(1));
  });
  it("should read 2", function () {
    assert("اثنان", parse(2));
  });
  it("should read 3", function () {
    assert("ثلاثة", parse(3));
  });
  it("should read 4", function () {
    assert("أربعة", parse(4));
  });
  it("should read 5", function () {
    assert("خمسة", parse(5));
  });
  it("should read 6", function () {
    assert("ستة", parse(6));
  });
  it("should read 7", function () {
    assert("سبعة", parse(7));
  });
  it("should read 8", function () {
    assert("ثمانية", parse(8));
  });
  it("should read 9", function () {
    assert("تسعة", parse(9));
  });
  it("should read 10", function () {
    assert("عشرة", parse(10));
  });
  it("should read 11", function () {
    assert("أحد عشر", parse(11));
  });
  it("should read 12", function () {
    assert("إثنا عشر", parse(12));
  });
  it("should read 13", function () {
    assert("ثلاثة عشر", parse(13));
  });
  it("should read 14", function () {
    assert("أربعة عشر", parse(14));
  });
  it("should read 15", function () {
    assert("خمسة عشر", parse(15));
  });
  it("should read 16", function () {
    assert("ستة عشر", parse(16));
  });
  it("should read 17", function () {
    assert("سبعة عشر", parse(17));
  });
  it("should read 18", function () {
    assert("ثمانية عشر", parse(18));
  });
  it("should read 19", function () {
    assert("تسعة عشر", parse(19));
  });
  it("should read 20", function () {
    assert("عشرون", parse(20));
  });
  it("should read 21", function () {
    assert("واحد وعشرون", parse(21));
  });
  it("should read 22", function () {
    assert("اثنان وعشرون", parse(22));
  });
  it("should read 23", function () {
    assert("ثلاثة وعشرون", parse(23));
  });
  it("should read 30", function () {
    assert("ثلاثون", parse(30));
  });
  it("should read 31", function () {
    assert("واحد وثلاثون", parse(31));
  });
  it("should read 32", function () {
    assert("اثنان وثلاثون", parse(32));
  });
  it("should read 33", function () {
    assert("ثلاثة وثلاثون", parse(33));
  });
  it("should read 40", function () {
    assert("أربعون", parse(40));
  });
  it("should read 41", function () {
    assert("واحد وأربعون", parse(41));
  });
  it("should read 42", function () {
    assert("اثنان وأربعون", parse(42));
  });
  it("should read 43", function () {
    assert("ثلاثة وأربعون", parse(43));
  });
  it("should read 99", function () {
    assert("تسعة وتسعون", parse(99));
  });
  it("should read 100", function () {
    assert("مائة", parse(100));
  });
  it("should read 101", function () {
    assert("مائة وواحد", parse(101));
  });
  it("should read 102", function () {
    assert("مائة واثنان", parse(102));
  });
  it("should read 103", function () {
    assert("مائة وثلاثة", parse(103));
  });
  it("should read 104", function () {
    assert("مائة وأربعة", parse(104));
  });
  it("should read 105", function () {
    assert("مائة وخمسة", parse(105));
  });
  it("should read 106", function () {
    assert("مائة وستة", parse(106));
  });
  it("should read 107", function () {
    assert("مائة وسبعة", parse(107));
  });
  it("should read 108", function () {
    assert("مائة وثمانية", parse(108));
  });
  it("should read 109", function () {
    assert("مائة وتسعة", parse(109));
  });
  it("should read 110", function () {
    assert("مائة وعشرة", parse(110));
  });
  it("should read 111", function () {
    assert("مائة وأحد عشر", parse(111));
  });
  it("should read 112", function () {
    assert("مائة وإثنا عشر", parse(112));
  });
  it("should read 113", function () {
    assert("مائة وثلاثة عشر", parse(113));
  });
  it("should read 120", function () {
    assert("مائة وعشرون", parse(120));
  });
  it("should read 121", function () {
    assert("مائة وواحد وعشرون", parse(121));
  });
  it("should read 122", function () {
    assert("مائة واثنان وعشرون", parse(122));
  });
  it("should read 123", function () {
    assert("مائة وثلاثة وعشرون", parse(123));
  });
  it("should read 130", function () {
    assert("مائة وثلاثون", parse(130));
  });
  it("should read 131", function () {
    assert("مائة وواحد وثلاثون", parse(131));
  });
  it("should read 132", function () {
    assert("مائة واثنان وثلاثون", parse(132));
  });
  it("should read 133", function () {
    assert("مائة وثلاثة وثلاثون", parse(133));
  });
  it("should read 140", function () {
    assert("مائة وأربعون", parse(140));
  });
  it("should read 150", function () {
    assert("مائة وخمسون", parse(150));
  });
  it("should read 199", function () {
    assert("مائة وتسعة وتسعون", parse(199));
  });
  it("should read 200", function () {
    assert("مائتان", parse(200));
  });
  it("should read 201", function () {
    assert("مائتان وواحد", parse(201));
  });
  it("should read 202", function () {
    assert("مائتان واثنان", parse(202));
  });
  it("should read 203", function () {
    assert("مائتان وثلاثة", parse(203));
  });
  it("should read 204", function () {
    assert("مائتان وأربعة", parse(204));
  });
  it("should read 205", function () {
    assert("مائتان وخمسة", parse(205));
  });
  it("should read 206", function () {
    assert("مائتان وستة", parse(206));
  });
  it("should read 207", function () {
    assert("مائتان وسبعة", parse(207));
  });
  it("should read 208", function () {
    assert("مائتان وثمانية", parse(208));
  });
  it("should read 209", function () {
    assert("مائتان وتسعة", parse(209));
  });
  it("should read 210", function () {
    assert("مائتان وعشرة", parse(210));
  });
  it("should read 211", function () {
    assert("مائتان وأحد عشر", parse(211));
  });
  it("should read 212", function () {
    assert("مائتان وإثنا عشر", parse(212));
  });
  it("should read 213", function () {
    assert("مائتان وثلاثة عشر", parse(213));
  });
  it("should read 220", function () {
    assert("مائتان وعشرون", parse(220));
  });
  it("should read 221", function () {
    assert("مائتان وواحد وعشرون", parse(221));
  });
  it("should read 222", function () {
    assert("مائتان واثنان وعشرون", parse(222));
  });
  it("should read 223", function () {
    assert("مائتان وثلاثة وعشرون", parse(223));
  });
  it("should read 230", function () {
    assert("مائتان وثلاثون", parse(230));
  });
  it("should read 231", function () {
    assert("مائتان وواحد وثلاثون", parse(231));
  });
  it("should read 232", function () {
    assert("مائتان واثنان وثلاثون", parse(232));
  });
  it("should read 233", function () {
    assert("مائتان وثلاثة وثلاثون", parse(233));
  });
  it("should read 299", function () {
    assert("مائتان وتسعة وتسعون", parse(299));
  });
  it("should read 300", function () {
    assert("ثلاثمائة", parse(300));
  });
  it("should read 301", function () {
    assert("ثلاثمائة وواحد", parse(301));
  });
  it("should read 302", function () {
    assert("ثلاثمائة واثنان", parse(302));
  });
  it("should read 303", function () {
    assert("ثلاثمائة وثلاثة", parse(303));
  });
  it("should read 310", function () {
    assert("ثلاثمائة وعشرة", parse(310));
  });
  it("should read 311", function () {
    assert("ثلاثمائة وأحد عشر", parse(311));
  });
  it("should read 312", function () {
    assert("ثلاثمائة وإثنا عشر", parse(312));
  });
  it("should read 313", function () {
    assert("ثلاثمائة وثلاثة عشر", parse(313));
  });
  it("should read 320", function () {
    assert("ثلاثمائة وعشرون", parse(320));
  });
  it("should read 321", function () {
    assert("ثلاثمائة وواحد وعشرون", parse(321));
  });
  it("should read 322", function () {
    assert("ثلاثمائة واثنان وعشرون", parse(322));
  });
  it("should read 323", function () {
    assert("ثلاثمائة وثلاثة وعشرون", parse(323));
  });
  it("should read 330", function () {
    assert("ثلاثمائة وثلاثون", parse(330));
  });
  it("should read 331", function () {
    assert("ثلاثمائة وواحد وثلاثون", parse(331));
  });
  it("should read 332", function () {
    assert("ثلاثمائة واثنان وثلاثون", parse(332));
  });
  it("should read 333", function () {
    assert("ثلاثمائة وثلاثة وثلاثون", parse(333));
  });
  it("should read 340", function () {
    assert("ثلاثمائة وأربعون", parse(340));
  });
  it("should read 400", function () {
    assert("أربعمائة", parse(400));
  });
  it("should read 500", function () {
    assert("خمسمائة", parse(500));
  });
  it("should read 600", function () {
    assert("ستمائة", parse(600));
  });
  it("should read 838", function () {
    assert("ثمانمائة وثمانية وثلاثون", parse(838));
  });
  it("should read 999", function () {
    assert("تسعمائة وتسعة وتسعون", parse(999));
  });
  it("should read 1000", function () {
    assert("ألف", parse(1000));
  });
  it("should read 2000", function () {
    assert("ألفان", parse(2000));
  });
  it("should read 2001", function () {
    assert("ألفان وواحد", parse(2001));
  });
  it("should read 2002", function () {
    assert("ألفان واثنان", parse(2002));
  });
  it("should read 2003", function () {
    assert("ألفان وثلاثة", parse(2003));
  });
  it("should read 2011", function () {
    assert("ألفان وأحد عشر", parse(2011));
  });
  it("should read 2022", function () {
    assert("ألفان واثنان وعشرون", parse(2022));
  });
  it("should read 2100", function () {
    assert("ألفان ومائة", parse(2100));
  });
  it("should read 2200", function () {
    assert("ألفان ومائتان", parse(2200));
  });
  it("should read 2300", function () {
    assert("ألفان وثلاثمائة", parse(2300));
  });
  it("should read 3000", function () {
    assert("ثلاثة آلاف", parse(3000));
  });
  it("should read 3001", function () {
    assert("ثلاثة آلاف وواحد", parse(3001));
  });
  it("should read 3002", function () {
    assert("ثلاثة آلاف واثنان", parse(3002));
  });
  it("should read 3003", function () {
    assert("ثلاثة آلاف وثلاثة", parse(3003));
  });
  it("should read 3011", function () {
    assert("ثلاثة آلاف وأحد عشر", parse(3011));
  });
  it("should read 3022", function () {
    assert("ثلاثة آلاف واثنان وعشرون", parse(3022));
  });
  it("should read 3100", function () {
    assert("ثلاثة آلاف ومائة", parse(3100));
  });
  it("should read 3200", function () {
    assert("ثلاثة آلاف ومائتان", parse(3200));
  });
  it("should read 3300", function () {
    assert("ثلاثة آلاف وثلاثمائة", parse(3300));
  });
  it("should read 4000", function () {
    assert("أربعة آلاف", parse(4000));
  });
  it("should read 4001", function () {
    assert("أربعة آلاف وواحد", parse(4001));
  });
  it("should read 4002", function () {
    assert("أربعة آلاف واثنان", parse(4002));
  });
  it("should read 4003", function () {
    assert("أربعة آلاف وثلاثة", parse(4003));
  });
  it("should read 4011", function () {
    assert("أربعة آلاف وأحد عشر", parse(4011));
  });
  it("should read 4022", function () {
    assert("أربعة آلاف واثنان وعشرون", parse(4022));
  });
  it("should read 4100", function () {
    assert("أربعة آلاف ومائة", parse(4100));
  });
  it("should read 4200", function () {
    assert("أربعة آلاف ومائتان", parse(4200));
  });
  it("should read 4300", function () {
    assert("أربعة آلاف وثلاثمائة", parse(4300));
  });
  it("should read 5001", function () {
    assert("خمسة آلاف وواحد", parse(5001));
  });
  it("should read 5002", function () {
    assert("خمسة آلاف واثنان", parse(5002));
  });
  it("should read 5003", function () {
    assert("خمسة آلاف وثلاثة", parse(5003));
  });
  it("should read 5011", function () {
    assert("خمسة آلاف وأحد عشر", parse(5011));
  });
  it("should read 5022", function () {
    assert("خمسة آلاف واثنان وعشرون", parse(5022));
  });
  it("should read 5100", function () {
    assert("خمسة آلاف ومائة", parse(5100));
  });
  it("should read 5200", function () {
    assert("خمسة آلاف ومائتان", parse(5200));
  });
  it("should read 5300", function () {
    assert("خمسة آلاف وثلاثمائة", parse(5300));
  });
  it("should read 6001", function () {
    assert("ستة آلاف وواحد", parse(6001));
  });
  it("should read 6002", function () {
    assert("ستة آلاف واثنان", parse(6002));
  });
  it("should read 6003", function () {
    assert("ستة آلاف وثلاثة", parse(6003));
  });
  it("should read 6011", function () {
    assert("ستة آلاف وأحد عشر", parse(6011));
  });
  it("should read 6022", function () {
    assert("ستة آلاف واثنان وعشرون", parse(6022));
  });
  it("should read 6100", function () {
    assert("ستة آلاف ومائة", parse(6100));
  });
  it("should read 6200", function () {
    assert("ستة آلاف ومائتان", parse(6200));
  });
  it("should read 6300", function () {
    assert("ستة آلاف وثلاثمائة", parse(6300));
  });
  it("should read 7001", function () {
    assert("سبعة آلاف وواحد", parse(7001));
  });
  it("should read 7002", function () {
    assert("سبعة آلاف واثنان", parse(7002));
  });
  it("should read 7003", function () {
    assert("سبعة آلاف وثلاثة", parse(7003));
  });
  it("should read 7011", function () {
    assert("سبعة آلاف وأحد عشر", parse(7011));
  });
  it("should read 7022", function () {
    assert("سبعة آلاف واثنان وعشرون", parse(7022));
  });
  it("should read 7100", function () {
    assert("سبعة آلاف ومائة", parse(7100));
  });
  it("should read 7200", function () {
    assert("سبعة آلاف ومائتان", parse(7200));
  });
  it("should read 7300", function () {
    assert("سبعة آلاف وثلاثمائة", parse(7300));
  });
  it("should read 8001", function () {
    assert("ثمانية آلاف وواحد", parse(8001));
  });
  it("should read 8002", function () {
    assert("ثمانية آلاف واثنان", parse(8002));
  });
  it("should read 8003", function () {
    assert("ثمانية آلاف وثلاثة", parse(8003));
  });
  it("should read 8011", function () {
    assert("ثمانية آلاف وأحد عشر", parse(8011));
  });
  it("should read 8022", function () {
    assert("ثمانية آلاف واثنان وعشرون", parse(8022));
  });
  it("should read 8100", function () {
    assert("ثمانية آلاف ومائة", parse(8100));
  });
  it("should read 8200", function () {
    assert("ثمانية آلاف ومائتان", parse(8200));
  });
  it("should read 8300", function () {
    assert("ثمانية آلاف وثلاثمائة", parse(8300));
  });
  it("should read 9001", function () {
    assert("تسعة آلاف وواحد", parse(9001));
  });
  it("should read 9002", function () {
    assert("تسعة آلاف واثنان", parse(9002));
  });
  it("should read 9003", function () {
    assert("تسعة آلاف وثلاثة", parse(9003));
  });
  it("should read 9011", function () {
    assert("تسعة آلاف وأحد عشر", parse(9011));
  });
  it("should read 9022", function () {
    assert("تسعة آلاف واثنان وعشرون", parse(9022));
  });
  it("should read 9100", function () {
    assert("تسعة آلاف ومائة", parse(9100));
  });
  it("should read 9200", function () {
    assert("تسعة آلاف ومائتان", parse(9200));
  });
  it("should read 9300", function () {
    assert("تسعة آلاف وثلاثمائة", parse(9300));
  });
  it("should read 10001", function () {
    assert("عشرة آلاف وواحد", parse(10001));
  });
  it("should read 10002", function () {
    assert("عشرة آلاف واثنان", parse(10002));
  });
  it("should read 10003", function () {
    assert("عشرة آلاف وثلاثة", parse(10003));
  });
  it("should read 10011", function () {
    assert("عشرة آلاف وأحد عشر", parse(10011));
  });
  it("should read 10022", function () {
    assert("عشرة آلاف واثنان وعشرون", parse(10022));
  });
  it("should read 10100", function () {
    assert("عشرة آلاف ومائة", parse(10100));
  });
  it("should read 10200", function () {
    assert("عشرة آلاف ومائتان", parse(10200));
  });
  it("should read 10300", function () {
    assert("عشرة آلاف وثلاثمائة", parse(10300));
  });
  it("should read 11001", function () {
    assert("أحد عشر ألفًا وواحد", parse(11001));
  });
  it("should read 11002", function () {
    assert("أحد عشر ألفًا واثنان", parse(11002));
  });
  it("should read 11003", function () {
    assert("أحد عشر ألفًا وثلاثة", parse(11003));
  });
  it("should read 11011", function () {
    assert("أحد عشر ألفًا وأحد عشر", parse(11011));
  });
  it("should read 11022", function () {
    assert("أحد عشر ألفًا واثنان وعشرون", parse(11022));
  });
  it("should read 11100", function () {
    assert("أحد عشر ألفًا ومائة", parse(11100));
  });
  it("should read 11200", function () {
    assert("أحد عشر ألفًا ومائتان", parse(11200));
  });
  it("should read 11300", function () {
    assert("أحد عشر ألفًا وثلاثمائة", parse(11300));
  });
  it("should read 12001", function () {
    assert("إثنا عشر ألفًا وواحد", parse(12001));
  });
  it("should read 12002", function () {
    assert("إثنا عشر ألفًا واثنان", parse(12002));
  });
  it("should read 12003", function () {
    assert("إثنا عشر ألفًا وثلاثة", parse(12003));
  });
  it("should read 12011", function () {
    assert("إثنا عشر ألفًا وأحد عشر", parse(12011));
  });
  it("should read 12022", function () {
    assert("إثنا عشر ألفًا واثنان وعشرون", parse(12022));
  });
  it("should read 12100", function () {
    assert("إثنا عشر ألفًا ومائة", parse(12100));
  });
  it("should read 12200", function () {
    assert("إثنا عشر ألفًا ومائتان", parse(12200));
  });
  it("should read 12300", function () {
    assert("إثنا عشر ألفًا وثلاثمائة", parse(12300));
  });
  it("should read 13001", function () {
    assert("ثلاثة عشر ألفًا وواحد", parse(13001));
  });
  it("should read 13002", function () {
    assert("ثلاثة عشر ألفًا واثنان", parse(13002));
  });
  it("should read 13003", function () {
    assert("ثلاثة عشر ألفًا وثلاثة", parse(13003));
  });
  it("should read 13011", function () {
    assert("ثلاثة عشر ألفًا وأحد عشر", parse(13011));
  });
  it("should read 13022", function () {
    assert("ثلاثة عشر ألفًا واثنان وعشرون", parse(13022));
  });
  it("should read 13100", function () {
    assert("ثلاثة عشر ألفًا ومائة", parse(13100));
  });
  it("should read 13200", function () {
    assert("ثلاثة عشر ألفًا ومائتان", parse(13200));
  });
  it("should read 13300", function () {
    assert("ثلاثة عشر ألفًا وثلاثمائة", parse(13300));
  });
  it("should read 14001", function () {
    assert("أربعة عشر ألفًا وواحد", parse(14001));
  });
  it("should read 14002", function () {
    assert("أربعة عشر ألفًا واثنان", parse(14002));
  });
  it("should read 14003", function () {
    assert("أربعة عشر ألفًا وثلاثة", parse(14003));
  });
  it("should read 14011", function () {
    assert("أربعة عشر ألفًا وأحد عشر", parse(14011));
  });
  it("should read 14022", function () {
    assert("أربعة عشر ألفًا واثنان وعشرون", parse(14022));
  });
  it("should read 14100", function () {
    assert("أربعة عشر ألفًا ومائة", parse(14100));
  });
  it("should read 14200", function () {
    assert("أربعة عشر ألفًا ومائتان", parse(14200));
  });
  it("should read 14300", function () {
    assert("أربعة عشر ألفًا وثلاثمائة", parse(14300));
  });
  it("should read 15001", function () {
    assert("خمسة عشر ألفًا وواحد", parse(15001));
  });
  it("should read 15002", function () {
    assert("خمسة عشر ألفًا واثنان", parse(15002));
  });
  it("should read 15003", function () {
    assert("خمسة عشر ألفًا وثلاثة", parse(15003));
  });
  it("should read 15011", function () {
    assert("خمسة عشر ألفًا وأحد عشر", parse(15011));
  });
  it("should read 15022", function () {
    assert("خمسة عشر ألفًا واثنان وعشرون", parse(15022));
  });
  it("should read 15100", function () {
    assert("خمسة عشر ألفًا ومائة", parse(15100));
  });
  it("should read 15200", function () {
    assert("خمسة عشر ألفًا ومائتان", parse(15200));
  });
  it("should read 15300", function () {
    assert("خمسة عشر ألفًا وثلاثمائة", parse(15300));
  });
  it("should read 16001", function () {
    assert("ستة عشر ألفًا وواحد", parse(16001));
  });
  it("should read 16002", function () {
    assert("ستة عشر ألفًا واثنان", parse(16002));
  });
  it("should read 16003", function () {
    assert("ستة عشر ألفًا وثلاثة", parse(16003));
  });
  it("should read 16011", function () {
    assert("ستة عشر ألفًا وأحد عشر", parse(16011));
  });
  it("should read 16022", function () {
    assert("ستة عشر ألفًا واثنان وعشرون", parse(16022));
  });
  it("should read 16100", function () {
    assert("ستة عشر ألفًا ومائة", parse(16100));
  });
  it("should read 16200", function () {
    assert("ستة عشر ألفًا ومائتان", parse(16200));
  });
  it("should read 16300", function () {
    assert("ستة عشر ألفًا وثلاثمائة", parse(16300));
  });
  it("should read 17001", function () {
    assert("سبعة عشر ألفًا وواحد", parse(17001));
  });
  it("should read 17002", function () {
    assert("سبعة عشر ألفًا واثنان", parse(17002));
  });
  it("should read 17003", function () {
    assert("سبعة عشر ألفًا وثلاثة", parse(17003));
  });
  it("should read 17011", function () {
    assert("سبعة عشر ألفًا وأحد عشر", parse(17011));
  });
  it("should read 17022", function () {
    assert("سبعة عشر ألفًا واثنان وعشرون", parse(17022));
  });
  it("should read 17100", function () {
    assert("سبعة عشر ألفًا ومائة", parse(17100));
  });
  it("should read 17200", function () {
    assert("سبعة عشر ألفًا ومائتان", parse(17200));
  });
  it("should read 17300", function () {
    assert("سبعة عشر ألفًا وثلاثمائة", parse(17300));
  });
  it("should read 18001", function () {
    assert("ثمانية عشر ألفًا وواحد", parse(18001));
  });
  it("should read 18002", function () {
    assert("ثمانية عشر ألفًا واثنان", parse(18002));
  });
  it("should read 18003", function () {
    assert("ثمانية عشر ألفًا وثلاثة", parse(18003));
  });
  it("should read 18011", function () {
    assert("ثمانية عشر ألفًا وأحد عشر", parse(18011));
  });
  it("should read 18022", function () {
    assert("ثمانية عشر ألفًا واثنان وعشرون", parse(18022));
  });
  it("should read 18100", function () {
    assert("ثمانية عشر ألفًا ومائة", parse(18100));
  });
  it("should read 18200", function () {
    assert("ثمانية عشر ألفًا ومائتان", parse(18200));
  });
  it("should read 18300", function () {
    assert("ثمانية عشر ألفًا وثلاثمائة", parse(18300));
  });
  it("should read 19001", function () {
    assert("تسعة عشر ألفًا وواحد", parse(19001));
  });
  it("should read 19002", function () {
    assert("تسعة عشر ألفًا واثنان", parse(19002));
  });
  it("should read 19003", function () {
    assert("تسعة عشر ألفًا وثلاثة", parse(19003));
  });
  it("should read 19011", function () {
    assert("تسعة عشر ألفًا وأحد عشر", parse(19011));
  });
  it("should read 19022", function () {
    assert("تسعة عشر ألفًا واثنان وعشرون", parse(19022));
  });
  it("should read 19100", function () {
    assert("تسعة عشر ألفًا ومائة", parse(19100));
  });
  it("should read 19200", function () {
    assert("تسعة عشر ألفًا ومائتان", parse(19200));
  });
  it("should read 19300", function () {
    assert("تسعة عشر ألفًا وثلاثمائة", parse(19300));
  });
  it("should read 20001", function () {
    assert("عشرون ألفًا وواحد", parse(20001));
  });
  it("should read 20002", function () {
    assert("عشرون ألفًا واثنان", parse(20002));
  });
  it("should read 20003", function () {
    assert("عشرون ألفًا وثلاثة", parse(20003));
  });
  it("should read 20011", function () {
    assert("عشرون ألفًا وأحد عشر", parse(20011));
  });
  it("should read 20022", function () {
    assert("عشرون ألفًا واثنان وعشرون", parse(20022));
  });
  it("should read 20100", function () {
    assert("عشرون ألفًا ومائة", parse(20100));
  });
  it("should read 20200", function () {
    assert("عشرون ألفًا ومائتان", parse(20200));
  });
  it("should read 20300", function () {
    assert("عشرون ألفًا وثلاثمائة", parse(20300));
  });
  it("should read 100000", function () {
    assert("مائة ألف", parse(100000));
  });
  it("should read 100001", function () {
    assert("مائة ألف وواحد", parse(100001));
  });
  it("should read 100002", function () {
    assert("مائة ألف واثنان", parse(100002));
  });
  it("should read 200000", function () {
    assert("مائتا ألف", parse(200000));
  });
  it("should read 200001", function () {
    assert("مائتا ألف وواحد", parse(200001));
  });
  it("should read 200002", function () {
    assert("مائتا ألف واثنان", parse(200002));
  });
  it("should read 200003", function () {
    assert("مائتا ألف وثلاثة", parse(200003));
  });
  it("should read 300000", function () {
    assert("ثلاثمائة ألف", parse(300000));
  });
  it("should read 300300", function () {
    assert("ثلاثمائة ألف وثلاثمائة", parse(300300));
  });
  it("should read 1000001", function () {
    assert("مليون وواحد", parse(1000001));
  });
  it("should read 1000002", function () {
    assert("مليون واثنان", parse(1000002));
  });
  it("should read 1000003", function () {
    assert("مليون وثلاثة", parse(1000003));
  });
  it("should read 1000032", function () {
    assert("مليون واثنان وثلاثون", parse(1000032));
  });
  it("should read 2002000", function () {
    assert("مليونان وألفان", parse(2002000));
  });
  it("should read 2002001", function () {
    assert("مليونان وألفان وواحد", parse(2002001));
  });
  it("should read 2002002", function () {
    assert("مليونان وألفان واثنان", parse(2002002));
  });
  it("should read 2002003", function () {
    assert("مليونان وألفان وثلاثة", parse(2002003));
  });
  it("should read 2002002000", function () {
    assert("بليونان ومليونان وألفان", parse(2002002000));
  });
  it("should read 2452002000", function () {
    assert("بليونان وأربعمائة واثنان وخمسون مليونًا وألفان", parse(2452002000));
  });
  it("should read 2452452000", function () {
    assert(
      "بليونان وأربعمائة واثنان وخمسون مليونًا وأربعمائة واثنان وخمسون ألفًا",
      parse(2452452000)
    );
  });
  it("should read ", function () {
    assert("صفر", parse());
  });
});

describe("Reading huge random numbers", function () {
  it("should read 133593538", function () {
    assert(
      "مائة وثلاثة وثلاثون مليونًا وخمسمائة وثلاثة وتسعون ألفًا وخمسمائة وثمانية وثلاثون",
      parse(133593538)
    );
  });
  it("should read 150600036", function () {
    assert("مائة وخمسون مليونًا وستمائة ألف وستة وثلاثون", parse(150600036));
  });
  it("should read 153247131", function () {
    assert(
      "مائة وثلاثة وخمسون مليونًا ومائتان وسبعة وأربعون ألفًا ومائة وواحد وثلاثون",
      parse(153247131)
    );
  });
  it("should read 266927512", function () {
    assert(
      "مائتان وستة وستون مليونًا وتسعمائة وسبعة وعشرون ألفًا وخمسمائة وإثنا عشر",
      parse(266927512)
    );
  });
  it("should read 275966218", function () {
    assert(
      "مائتان وخمسة وسبعون مليونًا وتسعمائة وستة وستون ألفًا ومائتان وثمانية عشر",
      parse(275966218)
    );
  });
  it("should read 276717080", function () {
    assert(
      "مائتان وستة وسبعون مليونًا وسبعمائة وسبعة عشر ألفًا وثمانون",
      parse(276717080)
    );
  });
  it("should read 319907040", function () {
    assert(
      "ثلاثمائة وتسعة عشر مليونًا وتسعمائة وسبعة آلاف وأربعون",
      parse(319907040)
    );
  });
  it("should read 334728005", function () {
    assert(
      "ثلاثمائة وأربعة وثلاثون مليونًا وسبعمائة وثمانية وعشرون ألفًا وخمسة",
      parse(334728005)
    );
  });
  it("should read 389732305", function () {
    assert(
      "ثلاثمائة وتسعة وثمانون مليونًا وسبعمائة واثنان وثلاثون ألفًا وثلاثمائة وخمسة",
      parse(389732305)
    );
  });
  it("should read 468934149", function () {
    assert(
      "أربعمائة وثمانية وستون مليونًا وتسعمائة وأربعة وثلاثون ألفًا ومائة وتسعة وأربعون",
      parse(468934149)
    );
  });
  it("should read 535313619", function () {
    assert(
      "خمسمائة وخمسة وثلاثون مليونًا وثلاثمائة وثلاثة عشر ألفًا وستمائة وتسعة عشر",
      parse(535313619)
    );
  });
  it("should read 577533290", function () {
    assert(
      "خمسمائة وسبعة وسبعون مليونًا وخمسمائة وثلاثة وثلاثون ألفًا ومائتان وتسعون",
      parse(577533290)
    );
  });
  it("should read 588592145", function () {
    assert(
      "خمسمائة وثمانية وثمانون مليونًا وخمسمائة واثنان وتسعون ألفًا ومائة وخمسة وأربعون",
      parse(588592145)
    );
  });
  it("should read 747165623", function () {
    assert(
      "سبعمائة وسبعة وأربعون مليونًا ومائة وخمسة وستون ألفًا وستمائة وثلاثة وعشرون",
      parse(747165623)
    );
  });
  it("should read 772879915", function () {
    assert(
      "سبعمائة واثنان وسبعون مليونًا وثمانمائة وتسعة وسبعون ألفًا وتسعمائة وخمسة عشر",
      parse(772879915)
    );
  });
  it("should read 776608320", function () {
    assert(
      "سبعمائة وستة وسبعون مليونًا وستمائة وثمانية آلاف وثلاثمائة وعشرون",
      parse(776608320)
    );
  });
  it("should read 789390732", function () {
    assert(
      "سبعمائة وتسعة وثمانون مليونًا وثلاثمائة وتسعون ألفًا وسبعمائة واثنان وثلاثون",
      parse(789390732)
    );
  });
  it("should read 836805607", function () {
    assert(
      "ثمانمائة وستة وثلاثون مليونًا وثمانمائة وخمسة آلاف وستمائة وسبعة",
      parse(836805607)
    );
  });
  it("should read 853300777", function () {
    assert(
      "ثمانمائة وثلاثة وخمسون مليونًا وثلاثمائة ألف وسبعمائة وسبعة وسبعون",
      parse(853300777)
    );
  });
  it("should read 876454158", function () {
    assert(
      "ثمانمائة وستة وسبعون مليونًا وأربعمائة وأربعة وخمسون ألفًا ومائة وثمانية وخمسون",
      parse(876454158)
    );
  });
  it("should read 923140660", function () {
    assert(
      "تسعمائة وثلاثة وعشرون مليونًا ومائة وأربعون ألفًا وستمائة وستون",
      parse(923140660)
    );
  });
  it("should read 988419084", function () {
    assert(
      "تسعمائة وثمانية وثمانون مليونًا وأربعمائة وتسعة عشر ألفًا وأربعة وثمانون",
      parse(988419084)
    );
  });
  it("should read 1003886569", function () {
    assert(
      "بليون وثلاثة ملايين وثمانمائة وستة وثمانون ألفًا وخمسمائة وتسعة وستون",
      parse(1003886569)
    );
  });
  it("should read 1019903489", function () {
    assert(
      "بليون وتسعة عشر مليونًا وتسعمائة وثلاثة آلاف وأربعمائة وتسعة وثمانون",
      parse(1019903489)
    );
  });
  it("should read 1038091586", function () {
    assert(
      "بليون وثمانية وثلاثون مليونًا وواحد وتسعون ألفًا وخمسمائة وستة وثمانون",
      parse(1038091586)
    );
  });
  it("should read 1044853732", function () {
    assert(
      "بليون وأربعة وأربعون مليونًا وثمانمائة وثلاثة وخمسون ألفًا وسبعمائة واثنان وثلاثون",
      parse(1044853732)
    );
  });
  it("should read 1177306000", function () {
    assert(
      "بليون ومائة وسبعة وسبعون مليونًا وثلاثمائة وستة آلاف",
      parse(1177306000)
    );
  });
  it("should read 1182337467", function () {
    assert(
      "بليون ومائة واثنان وثمانون مليونًا وثلاثمائة وسبعة وثلاثون ألفًا وأربعمائة وسبعة وستون",
      parse(1182337467)
    );
  });
  it("should read 1260211836", function () {
    assert(
      "بليون ومائتان وستون مليونًا ومائتان وأحد عشر ألفًا وثمانمائة وستة وثلاثون",
      parse(1260211836)
    );
  });
  it("should read 1273587193", function () {
    assert(
      "بليون ومائتان وثلاثة وسبعون مليونًا وخمسمائة وسبعة وثمانون ألفًا ومائة وثلاثة وتسعون",
      parse(1273587193)
    );
  });
  it("should read 1286621588", function () {
    assert(
      "بليون ومائتان وستة وثمانون مليونًا وستمائة وواحد وعشرون ألفًا وخمسمائة وثمانية وثمانون",
      parse(1286621588)
    );
  });
  it("should read 1294216768", function () {
    assert(
      "بليون ومائتان وأربعة وتسعون مليونًا ومائتان وستة عشر ألفًا وسبعمائة وثمانية وستون",
      parse(1294216768)
    );
  });
  it("should read 1359295838", function () {
    assert(
      "بليون وثلاثمائة وتسعة وخمسون مليونًا ومائتان وخمسة وتسعون ألفًا وثمانمائة وثمانية وثلاثون",
      parse(1359295838)
    );
  });
  it("should read 1360264435", function () {
    assert(
      "بليون وثلاثمائة وستون مليونًا ومائتان وأربعة وستون ألفًا وأربعمائة وخمسة وثلاثون",
      parse(1360264435)
    );
  });
  it("should read 1431792633", function () {
    assert(
      "بليون وأربعمائة وواحد وثلاثون مليونًا وسبعمائة واثنان وتسعون ألفًا وستمائة وثلاثة وثلاثون",
      parse(1431792633)
    );
  });
  it("should read 1461460183", function () {
    assert(
      "بليون وأربعمائة وواحد وستون مليونًا وأربعمائة وستون ألفًا ومائة وثلاثة وثمانون",
      parse(1461460183)
    );
  });
  it("should read 1479895543", function () {
    assert(
      "بليون وأربعمائة وتسعة وسبعون مليونًا وثمانمائة وخمسة وتسعون ألفًا وخمسمائة وثلاثة وأربعون",
      parse(1479895543)
    );
  });
  it("should read 1511757741", function () {
    assert(
      "بليون وخمسمائة وأحد عشر مليونًا وسبعمائة وسبعة وخمسون ألفًا وسبعمائة وواحد وأربعون",
      parse(1511757741)
    );
  });
  it("should read 1523841430", function () {
    assert(
      "بليون وخمسمائة وثلاثة وعشرون مليونًا وثمانمائة وواحد وأربعون ألفًا وأربعمائة وثلاثون",
      parse(1523841430)
    );
  });
  it("should read 1573836112", function () {
    assert(
      "بليون وخمسمائة وثلاثة وسبعون مليونًا وثمانمائة وستة وثلاثون ألفًا ومائة وإثنا عشر",
      parse(1573836112)
    );
  });
  it("should read 1649057407", function () {
    assert(
      "بليون وستمائة وتسعة وأربعون مليونًا وسبعة وخمسون ألفًا وأربعمائة وسبعة",
      parse(1649057407)
    );
  });
  it("should read 1689111081", function () {
    assert(
      "بليون وستمائة وتسعة وثمانون مليونًا ومائة وأحد عشر ألفًا وواحد وثمانون",
      parse(1689111081)
    );
  });
  it("should read 1742792404", function () {
    assert(
      "بليون وسبعمائة واثنان وأربعون مليونًا وسبعمائة واثنان وتسعون ألفًا وأربعمائة وأربعة",
      parse(1742792404)
    );
  });
  it("should read 1743900443", function () {
    assert(
      "بليون وسبعمائة وثلاثة وأربعون مليونًا وتسعمائة ألف وأربعمائة وثلاثة وأربعون",
      parse(1743900443)
    );
  });
  it("should read 1760645398", function () {
    assert(
      "بليون وسبعمائة وستون مليونًا وستمائة وخمسة وأربعون ألفًا وثلاثمائة وثمانية وتسعون",
      parse(1760645398)
    );
  });
  it("should read 1793951286", function () {
    assert(
      "بليون وسبعمائة وثلاثة وتسعون مليونًا وتسعمائة وواحد وخمسون ألفًا ومائتان وستة وثمانون",
      parse(1793951286)
    );
  });
  it("should read 1851972543", function () {
    assert(
      "بليون وثمانمائة وواحد وخمسون مليونًا وتسعمائة واثنان وسبعون ألفًا وخمسمائة وثلاثة وأربعون",
      parse(1851972543)
    );
  });
  it("should read 1894401367", function () {
    assert(
      "بليون وثمانمائة وأربعة وتسعون مليونًا وأربعمائة وألف وثلاثمائة وسبعة وستون",
      parse(1894401367)
    );
  });
  it("should read 1927149220", function () {
    assert(
      "بليون وتسعمائة وسبعة وعشرون مليونًا ومائة وتسعة وأربعون ألفًا ومائتان وعشرون",
      parse(1927149220)
    );
  });
  it("should read 1942138508", function () {
    assert(
      "بليون وتسعمائة واثنان وأربعون مليونًا ومائة وثمانية وثلاثون ألفًا وخمسمائة وثمانية",
      parse(1942138508)
    );
  });
  it("should read 2024840531", function () {
    assert(
      "بليونان وأربعة وعشرون مليونًا وثمانمائة وأربعون ألفًا وخمسمائة وواحد وثلاثون",
      parse(2024840531)
    );
  });
  it("should read 2117744990", function () {
    assert(
      "بليونان ومائة وسبعة عشر مليونًا وسبعمائة وأربعة وأربعون ألفًا وتسعمائة وتسعون",
      parse(2117744990)
    );
  });
  it("should read 2118450794", function () {
    assert(
      "بليونان ومائة وثمانية عشر مليونًا وأربعمائة وخمسون ألفًا وسبعمائة وأربعة وتسعون",
      parse(2118450794)
    );
  });
  it("should read 2204592873", function () {
    assert(
      "بليونان ومائتان وأربعة ملايين وخمسمائة واثنان وتسعون ألفًا وثمانمائة وثلاثة وسبعون",
      parse(2204592873)
    );
  });
  it("should read 2252424481", function () {
    assert(
      "بليونان ومائتان واثنان وخمسون مليونًا وأربعمائة وأربعة وعشرون ألفًا وأربعمائة وواحد وثمانون",
      parse(2252424481)
    );
  });
  it("should read 2314220901", function () {
    assert(
      "بليونان وثلاثمائة وأربعة عشر مليونًا ومائتان وعشرون ألفًا وتسعمائة وواحد",
      parse(2314220901)
    );
  });
  it("should read 2326741448", function () {
    assert(
      "بليونان وثلاثمائة وستة وعشرون مليونًا وسبعمائة وواحد وأربعون ألفًا وأربعمائة وثمانية وأربعون",
      parse(2326741448)
    );
  });
  it("should read 2385461192", function () {
    assert(
      "بليونان وثلاثمائة وخمسة وثمانون مليونًا وأربعمائة وواحد وستون ألفًا ومائة واثنان وتسعون",
      parse(2385461192)
    );
  });
  it("should read 2407946945", function () {
    assert(
      "بليونان وأربعمائة وسبعة ملايين وتسعمائة وستة وأربعون ألفًا وتسعمائة وخمسة وأربعون",
      parse(2407946945)
    );
  });
  it("should read 2510446651", function () {
    assert(
      "بليونان وخمسمائة وعشرة ملايين وأربعمائة وستة وأربعون ألفًا وستمائة وواحد وخمسون",
      parse(2510446651)
    );
  });
  it("should read 2537935728", function () {
    assert(
      "بليونان وخمسمائة وسبعة وثلاثون مليونًا وتسعمائة وخمسة وثلاثون ألفًا وسبعمائة وثمانية وعشرون",
      parse(2537935728)
    );
  });
  it("should read 2567517804", function () {
    assert(
      "بليونان وخمسمائة وسبعة وستون مليونًا وخمسمائة وسبعة عشر ألفًا وثمانمائة وأربعة",
      parse(2567517804)
    );
  });
  it("should read 2604409456", function () {
    assert(
      "بليونان وستمائة وأربعة ملايين وأربعمائة وتسعة آلاف وأربعمائة وستة وخمسون",
      parse(2604409456)
    );
  });
  it("should read 2622596829", function () {
    assert(
      "بليونان وستمائة واثنان وعشرون مليونًا وخمسمائة وستة وتسعون ألفًا وثمانمائة وتسعة وعشرون",
      parse(2622596829)
    );
  });
  it("should read 2680841006", function () {
    assert(
      "بليونان وستمائة وثمانون مليونًا وثمانمائة وواحد وأربعون ألفًا وستة",
      parse(2680841006)
    );
  });
  it("should read 2701330646", function () {
    assert(
      "بليونان وسبعمائة ومليون وثلاثمائة وثلاثون ألفًا وستمائة وستة وأربعون",
      parse(2701330646)
    );
  });
  it("should read 2720047164", function () {
    assert(
      "بليونان وسبعمائة وعشرون مليونًا وسبعة وأربعون ألفًا ومائة وأربعة وستون",
      parse(2720047164)
    );
  });
  it("should read 2727896505", function () {
    assert(
      "بليونان وسبعمائة وسبعة وعشرون مليونًا وثمانمائة وستة وتسعون ألفًا وخمسمائة وخمسة",
      parse(2727896505)
    );
  });
  it("should read 2781287698", function () {
    assert(
      "بليونان وسبعمائة وواحد وثمانون مليونًا ومائتان وسبعة وثمانون ألفًا وستمائة وثمانية وتسعون",
      parse(2781287698)
    );
  });
  it("should read 2825695356", function () {
    assert(
      "بليونان وثمانمائة وخمسة وعشرون مليونًا وستمائة وخمسة وتسعون ألفًا وثلاثمائة وستة وخمسون",
      parse(2825695356)
    );
  });
  it("should read 2847398035", function () {
    assert(
      "بليونان وثمانمائة وسبعة وأربعون مليونًا وثلاثمائة وثمانية وتسعون ألفًا وخمسة وثلاثون",
      parse(2847398035)
    );
  });
  it("should read 2944292855", function () {
    assert(
      "بليونان وتسعمائة وأربعة وأربعون مليونًا ومائتان واثنان وتسعون ألفًا وثمانمائة وخمسة وخمسون",
      parse(2944292855)
    );
  });
  it("should read 2944767847", function () {
    assert(
      "بليونان وتسعمائة وأربعة وأربعون مليونًا وسبعمائة وسبعة وستون ألفًا وثمانمائة وسبعة وأربعون",
      parse(2944767847)
    );
  });
  it("should read 3022469061", function () {
    assert(
      "ثلاثة بلايين واثنان وعشرون مليونًا وأربعمائة وتسعة وستون ألفًا وواحد وستون",
      parse(3022469061)
    );
  });
  it("should read 3037470969", function () {
    assert(
      "ثلاثة بلايين وسبعة وثلاثون مليونًا وأربعمائة وسبعون ألفًا وتسعمائة وتسعة وستون",
      parse(3037470969)
    );
  });
  it("should read 3080933235", function () {
    assert(
      "ثلاثة بلايين وثمانون مليونًا وتسعمائة وثلاثة وثلاثون ألفًا ومائتان وخمسة وثلاثون",
      parse(3080933235)
    );
  });
  it("should read 3114675044", function () {
    assert(
      "ثلاثة بلايين ومائة وأربعة عشر مليونًا وستمائة وخمسة وسبعون ألفًا وأربعة وأربعون",
      parse(3114675044)
    );
  });
  it("should read 3141680178", function () {
    assert(
      "ثلاثة بلايين ومائة وواحد وأربعون مليونًا وستمائة وثمانون ألفًا ومائة وثمانية وسبعون",
      parse(3141680178)
    );
  });
  it("should read 3156421456", function () {
    assert(
      "ثلاثة بلايين ومائة وستة وخمسون مليونًا وأربعمائة وواحد وعشرون ألفًا وأربعمائة وستة وخمسون",
      parse(3156421456)
    );
  });
  it("should read 3164773465", function () {
    assert(
      "ثلاثة بلايين ومائة وأربعة وستون مليونًا وسبعمائة وثلاثة وسبعون ألفًا وأربعمائة وخمسة وستون",
      parse(3164773465)
    );
  });
  it("should read 3199494804", function () {
    assert(
      "ثلاثة بلايين ومائة وتسعة وتسعون مليونًا وأربعمائة وأربعة وتسعون ألفًا وثمانمائة وأربعة",
      parse(3199494804)
    );
  });
  it("should read 3249851476", function () {
    assert(
      "ثلاثة بلايين ومائتان وتسعة وأربعون مليونًا وثمانمائة وواحد وخمسون ألفًا وأربعمائة وستة وسبعون",
      parse(3249851476)
    );
  });
  it("should read 3258102607", function () {
    assert(
      "ثلاثة بلايين ومائتان وثمانية وخمسون مليونًا ومائة وألفان وستمائة وسبعة",
      parse(3258102607)
    );
  });
  it("should read 3373787120", function () {
    assert(
      "ثلاثة بلايين وثلاثمائة وثلاثة وسبعون مليونًا وسبعمائة وسبعة وثمانون ألفًا ومائة وعشرون",
      parse(3373787120)
    );
  });
  it("should read 3431179694", function () {
    assert(
      "ثلاثة بلايين وأربعمائة وواحد وثلاثون مليونًا ومائة وتسعة وسبعون ألفًا وستمائة وأربعة وتسعون",
      parse(3431179694)
    );
  });
  it("should read 3433625969", function () {
    assert(
      "ثلاثة بلايين وأربعمائة وثلاثة وثلاثون مليونًا وستمائة وخمسة وعشرون ألفًا وتسعمائة وتسعة وستون",
      parse(3433625969)
    );
  });
  it("should read 3464730871", function () {
    assert(
      "ثلاثة بلايين وأربعمائة وأربعة وستون مليونًا وسبعمائة وثلاثون ألفًا وثمانمائة وواحد وسبعون",
      parse(3464730871)
    );
  });
  it("should read 3488317899", function () {
    assert(
      "ثلاثة بلايين وأربعمائة وثمانية وثمانون مليونًا وثلاثمائة وسبعة عشر ألفًا وثمانمائة وتسعة وتسعون",
      parse(3488317899)
    );
  });
  it("should read 3488595938", function () {
    assert(
      "ثلاثة بلايين وأربعمائة وثمانية وثمانون مليونًا وخمسمائة وخمسة وتسعون ألفًا وتسعمائة وثمانية وثلاثون",
      parse(3488595938)
    );
  });
  it("should read 3541382244", function () {
    assert(
      "ثلاثة بلايين وخمسمائة وواحد وأربعون مليونًا وثلاثمائة واثنان وثمانون ألفًا ومائتان وأربعة وأربعون",
      parse(3541382244)
    );
  });
  it("should read 3601317921", function () {
    assert(
      "ثلاثة بلايين وستمائة ومليون وثلاثمائة وسبعة عشر ألفًا وتسعمائة وواحد وعشرون",
      parse(3601317921)
    );
  });
  it("should read 3602149116", function () {
    assert(
      "ثلاثة بلايين وستمائة ومليونان ومائة وتسعة وأربعون ألفًا ومائة وستة عشر",
      parse(3602149116)
    );
  });
  it("should read 3655585548", function () {
    assert(
      "ثلاثة بلايين وستمائة وخمسة وخمسون مليونًا وخمسمائة وخمسة وثمانون ألفًا وخمسمائة وثمانية وأربعون",
      parse(3655585548)
    );
  });
  it("should read 3657711572", function () {
    assert(
      "ثلاثة بلايين وستمائة وسبعة وخمسون مليونًا وسبعمائة وأحد عشر ألفًا وخمسمائة واثنان وسبعون",
      parse(3657711572)
    );
  });
  it("should read 3800626321", function () {
    assert(
      "ثلاثة بلايين وثمانمائة مليون وستمائة وستة وعشرون ألفًا وثلاثمائة وواحد وعشرون",
      parse(3800626321)
    );
  });
  it("should read 3916594009", function () {
    assert(
      "ثلاثة بلايين وتسعمائة وستة عشر مليونًا وخمسمائة وأربعة وتسعون ألفًا وتسعة",
      parse(3916594009)
    );
  });
  it("should read 3987198027", function () {
    assert(
      "ثلاثة بلايين وتسعمائة وسبعة وثمانون مليونًا ومائة وثمانية وتسعون ألفًا وسبعة وعشرون",
      parse(3987198027)
    );
  });
  it("should read 4005894858", function () {
    assert(
      "أربعة بلايين وخمسة ملايين وثمانمائة وأربعة وتسعون ألفًا وثمانمائة وثمانية وخمسون",
      parse(4005894858)
    );
  });
  it("should read 4017814454", function () {
    assert(
      "أربعة بلايين وسبعة عشر مليونًا وثمانمائة وأربعة عشر ألفًا وأربعمائة وأربعة وخمسون",
      parse(4017814454)
    );
  });
  it("should read 4057457501", function () {
    assert(
      "أربعة بلايين وسبعة وخمسون مليونًا وأربعمائة وسبعة وخمسون ألفًا وخمسمائة وواحد",
      parse(4057457501)
    );
  });
  it("should read 4089378475", function () {
    assert(
      "أربعة بلايين وتسعة وثمانون مليونًا وثلاثمائة وثمانية وسبعون ألفًا وأربعمائة وخمسة وسبعون",
      parse(4089378475)
    );
  });
  it("should read 4115205557", function () {
    assert(
      "أربعة بلايين ومائة وخمسة عشر مليونًا ومائتان وخمسة آلاف وخمسمائة وسبعة وخمسون",
      parse(4115205557)
    );
  });
  it("should read 4126317727", function () {
    assert(
      "أربعة بلايين ومائة وستة وعشرون مليونًا وثلاثمائة وسبعة عشر ألفًا وسبعمائة وسبعة وعشرون",
      parse(4126317727)
    );
  });
  it("should read 4131221612", function () {
    assert(
      "أربعة بلايين ومائة وواحد وثلاثون مليونًا ومائتان وواحد وعشرون ألفًا وستمائة وإثنا عشر",
      parse(4131221612)
    );
  });
  it("should read 4176909041", function () {
    assert(
      "أربعة بلايين ومائة وستة وسبعون مليونًا وتسعمائة وتسعة آلاف وواحد وأربعون",
      parse(4176909041)
    );
  });
  it("should read 4251934169", function () {
    assert(
      "أربعة بلايين ومائتان وواحد وخمسون مليونًا وتسعمائة وأربعة وثلاثون ألفًا ومائة وتسعة وستون",
      parse(4251934169)
    );
  });
  it("should read 4291133853", function () {
    assert(
      "أربعة بلايين ومائتان وواحد وتسعون مليونًا ومائة وثلاثة وثلاثون ألفًا وثمانمائة وثلاثة وخمسون",
      parse(4291133853)
    );
  });
  it("should read 16588464060", function () {
    assert(
      "ستة عشر بليونًا وخمسمائة وثمانية وثمانون مليونًا وأربعمائة وأربعة وستون ألفًا وستون",
      parse(16588464060)
    );
  });
  it("should read 25933508149", function () {
    assert(
      "خمسة وعشرون بليونًا وتسعمائة وثلاثة وثلاثون مليونًا وخمسمائة وثمانية آلاف ومائة وتسعة وأربعون",
      parse(25933508149)
    );
  });
  it("should read 9508062051", function () {
    assert(
      "تسعة بلايين وخمسمائة وثمانية ملايين واثنان وستون ألفًا وواحد وخمسون",
      parse(9508062051)
    );
  });
  it("should read 12026259028", function () {
    assert(
      "إثنا عشر بليونًا وستة وعشرون مليونًا ومائتان وتسعة وخمسون ألفًا وثمانية وعشرون",
      parse(12026259028)
    );
  });
  it("should read 5916108589", function () {
    assert(
      "خمسة بلايين وتسعمائة وستة عشر مليونًا ومائة وثمانية آلاف وخمسمائة وتسعة وثمانون",
      parse(5916108589)
    );
  });
  it("should read 5361089633", function () {
    assert(
      "خمسة بلايين وثلاثمائة وواحد وستون مليونًا وتسعة وثمانون ألفًا وستمائة وثلاثة وثلاثون",
      parse(5361089633)
    );
  });
  it("should read 22446486228", function () {
    assert(
      "اثنان وعشرون بليونًا وأربعمائة وستة وأربعون مليونًا وأربعمائة وستة وثمانون ألفًا ومائتان وثمانية وعشرون",
      parse(22446486228)
    );
  });
  it("should read 26219029933", function () {
    assert(
      "ستة وعشرون بليونًا ومائتان وتسعة عشر مليونًا وتسعة وعشرون ألفًا وتسعمائة وثلاثة وثلاثون",
      parse(26219029933)
    );
  });
  it("should read 5544308957", function () {
    assert(
      "خمسة بلايين وخمسمائة وأربعة وأربعون مليونًا وثلاثمائة وثمانية آلاف وتسعمائة وسبعة وخمسون",
      parse(5544308957)
    );
  });
  it("should read 22234423596", function () {
    assert(
      "اثنان وعشرون بليونًا ومائتان وأربعة وثلاثون مليونًا وأربعمائة وثلاثة وعشرون ألفًا وخمسمائة وستة وتسعون",
      parse(22234423596)
    );
  });
  it("should read 22040662708", function () {
    assert(
      "اثنان وعشرون بليونًا وأربعون مليونًا وستمائة واثنان وستون ألفًا وسبعمائة وثمانية",
      parse(22040662708)
    );
  });
  it("should read 8202141901", function () {
    assert(
      "ثمانية بلايين ومائتان ومليونان ومائة وواحد وأربعون ألفًا وتسعمائة وواحد",
      parse(8202141901)
    );
  });
  it("should read 23303869077", function () {
    assert(
      "ثلاثة وعشرون بليونًا وثلاثمائة وثلاثة ملايين وثمانمائة وتسعة وستون ألفًا وسبعة وسبعون",
      parse(23303869077)
    );
  });
  it("should read 9960439260", function () {
    assert(
      "تسعة بلايين وتسعمائة وستون مليونًا وأربعمائة وتسعة وثلاثون ألفًا ومائتان وستون",
      parse(9960439260)
    );
  });
  it("should read 11725394012", function () {
    assert(
      "أحد عشر بليونًا وسبعمائة وخمسة وعشرون مليونًا وثلاثمائة وأربعة وتسعون ألفًا وإثنا عشر",
      parse(11725394012)
    );
  });
  it("should read 15577570947", function () {
    assert(
      "خمسة عشر بليونًا وخمسمائة وسبعة وسبعون مليونًا وخمسمائة وسبعون ألفًا وتسعمائة وسبعة وأربعون",
      parse(15577570947)
    );
  });
  it("should read 10652480955", function () {
    assert(
      "عشرة بلايين وستمائة واثنان وخمسون مليونًا وأربعمائة وثمانون ألفًا وتسعمائة وخمسة وخمسون",
      parse(10652480955)
    );
  });
  it("should read 25835844928", function () {
    assert(
      "خمسة وعشرون بليونًا وثمانمائة وخمسة وثلاثون مليونًا وثمانمائة وأربعة وأربعون ألفًا وتسعمائة وثمانية وعشرون",
      parse(25835844928)
    );
  });
  it("should read 26095708266", function () {
    assert(
      "ستة وعشرون بليونًا وخمسة وتسعون مليونًا وسبعمائة وثمانية آلاف ومائتان وستة وستون",
      parse(26095708266)
    );
  });
  it("should read 25577523453", function () {
    assert(
      "خمسة وعشرون بليونًا وخمسمائة وسبعة وسبعون مليونًا وخمسمائة وثلاثة وعشرون ألفًا وأربعمائة وثلاثة وخمسون",
      parse(25577523453)
    );
  });
  it("should read 5770217114", function () {
    assert(
      "خمسة بلايين وسبعمائة وسبعون مليونًا ومائتان وسبعة عشر ألفًا ومائة وأربعة عشر",
      parse(5770217114)
    );
  });
  it("should read 14065834044", function () {
    assert(
      "أربعة عشر بليونًا وخمسة وستون مليونًا وثمانمائة وأربعة وثلاثون ألفًا وأربعة وأربعون",
      parse(14065834044)
    );
  });
  it("should read 17518053171", function () {
    assert(
      "سبعة عشر بليونًا وخمسمائة وثمانية عشر مليونًا وثلاثة وخمسون ألفًا ومائة وواحد وسبعون",
      parse(17518053171)
    );
  });
  it("should read 17392055911", function () {
    assert(
      "سبعة عشر بليونًا وثلاثمائة واثنان وتسعون مليونًا وخمسة وخمسون ألفًا وتسعمائة وأحد عشر",
      parse(17392055911)
    );
  });
  it("should read 19375482131", function () {
    assert(
      "تسعة عشر بليونًا وثلاثمائة وخمسة وسبعون مليونًا وأربعمائة واثنان وثمانون ألفًا ومائة وواحد وثلاثون",
      parse(19375482131)
    );
  });
  it("should read 28151731227", function () {
    assert(
      "ثمانية وعشرون بليونًا ومائة وواحد وخمسون مليونًا وسبعمائة وواحد وثلاثون ألفًا ومائتان وسبعة وعشرون",
      parse(28151731227)
    );
  });
  it("should read 9164453550", function () {
    assert(
      "تسعة بلايين ومائة وأربعة وستون مليونًا وأربعمائة وثلاثة وخمسون ألفًا وخمسمائة وخمسون",
      parse(9164453550)
    );
  });
  it("should read 9919004758", function () {
    assert(
      "تسعة بلايين وتسعمائة وتسعة عشر مليونًا وأربعة آلاف وسبعمائة وثمانية وخمسون",
      parse(9919004758)
    );
  });
  it("should read 4512162471", function () {
    assert(
      "أربعة بلايين وخمسمائة وإثنا عشر مليونًا ومائة واثنان وستون ألفًا وأربعمائة وواحد وسبعون",
      parse(4512162471)
    );
  });
  it("should read 8354119232", function () {
    assert(
      "ثمانية بلايين وثلاثمائة وأربعة وخمسون مليونًا ومائة وتسعة عشر ألفًا ومائتان واثنان وثلاثون",
      parse(8354119232)
    );
  });
  it("should read 12794147333", function () {
    assert(
      "إثنا عشر بليونًا وسبعمائة وأربعة وتسعون مليونًا ومائة وسبعة وأربعون ألفًا وثلاثمائة وثلاثة وثلاثون",
      parse(12794147333)
    );
  });
  it("should read 24087211632", function () {
    assert(
      "أربعة وعشرون بليونًا وسبعة وثمانون مليونًا ومائتان وأحد عشر ألفًا وستمائة واثنان وثلاثون",
      parse(24087211632)
    );
  });
  it("should read 7692208756", function () {
    assert(
      "سبعة بلايين وستمائة واثنان وتسعون مليونًا ومائتان وثمانية آلاف وسبعمائة وستة وخمسون",
      parse(7692208756)
    );
  });
  it("should read 20652036929", function () {
    assert(
      "عشرون بليونًا وستمائة واثنان وخمسون مليونًا وستة وثلاثون ألفًا وتسعمائة وتسعة وعشرون",
      parse(20652036929)
    );
  });
  it("should read 22430735160", function () {
    assert(
      "اثنان وعشرون بليونًا وأربعمائة وثلاثون مليونًا وسبعمائة وخمسة وثلاثون ألفًا ومائة وستون",
      parse(22430735160)
    );
  });
  it("should read 18873809051", function () {
    assert(
      "ثمانية عشر بليونًا وثمانمائة وثلاثة وسبعون مليونًا وثمانمائة وتسعة آلاف وواحد وخمسون",
      parse(18873809051)
    );
  });
  it("should read 27462633107", function () {
    assert(
      "سبعة وعشرون بليونًا وأربعمائة واثنان وستون مليونًا وستمائة وثلاثة وثلاثون ألفًا ومائة وسبعة",
      parse(27462633107)
    );
  });
  it("should read 18593676119", function () {
    assert(
      "ثمانية عشر بليونًا وخمسمائة وثلاثة وتسعون مليونًا وستمائة وستة وسبعون ألفًا ومائة وتسعة عشر",
      parse(18593676119)
    );
  });
  it("should read 28037200380", function () {
    assert(
      "ثمانية وعشرون بليونًا وسبعة وثلاثون مليونًا ومائتا ألف وثلاثمائة وثمانون",
      parse(28037200380)
    );
  });
  it("should read 25210077132", function () {
    assert(
      "خمسة وعشرون بليونًا ومائتان وعشرة ملايين وسبعة وسبعون ألفًا ومائة واثنان وثلاثون",
      parse(25210077132)
    );
  });
  it("should read 19632902906", function () {
    assert(
      "تسعة عشر بليونًا وستمائة واثنان وثلاثون مليونًا وتسعمائة وألفان وتسعمائة وستة",
      parse(19632902906)
    );
  });
  it("should read 10327426457", function () {
    assert(
      "عشرة بلايين وثلاثمائة وسبعة وعشرون مليونًا وأربعمائة وستة وعشرون ألفًا وأربعمائة وسبعة وخمسون",
      parse(10327426457)
    );
  });
  it("should read 10927596595", function () {
    assert(
      "عشرة بلايين وتسعمائة وسبعة وعشرون مليونًا وخمسمائة وستة وتسعون ألفًا وخمسمائة وخمسة وتسعون",
      parse(10927596595)
    );
  });
  it("should read 26923687635", function () {
    assert(
      "ستة وعشرون بليونًا وتسعمائة وثلاثة وعشرون مليونًا وستمائة وسبعة وثمانون ألفًا وستمائة وخمسة وثلاثون",
      parse(26923687635)
    );
  });
  it("should read 12053899910", function () {
    assert(
      "إثنا عشر بليونًا وثلاثة وخمسون مليونًا وثمانمائة وتسعة وتسعون ألفًا وتسعمائة وعشرة",
      parse(12053899910)
    );
  });
  it("should read 20548485559", function () {
    assert(
      "عشرون بليونًا وخمسمائة وثمانية وأربعون مليونًا وأربعمائة وخمسة وثمانون ألفًا وخمسمائة وتسعة وخمسون",
      parse(20548485559)
    );
  });
  it("should read 29678693421", function () {
    assert(
      "تسعة وعشرون بليونًا وستمائة وثمانية وسبعون مليونًا وستمائة وثلاثة وتسعون ألفًا وأربعمائة وواحد وعشرون",
      parse(29678693421)
    );
  });
  it("should read 8099203999", function () {
    assert(
      "ثمانية بلايين وتسعة وتسعون مليونًا ومائتان وثلاثة آلاف وتسعمائة وتسعة وتسعون",
      parse(8099203999)
    );
  });
  it("should read 15447407024", function () {
    assert(
      "خمسة عشر بليونًا وأربعمائة وسبعة وأربعون مليونًا وأربعمائة وسبعة آلاف وأربعة وعشرون",
      parse(15447407024)
    );
  });
  it("should read 17549375879", function () {
    assert(
      "سبعة عشر بليونًا وخمسمائة وتسعة وأربعون مليونًا وثلاثمائة وخمسة وسبعون ألفًا وثمانمائة وتسعة وسبعون",
      parse(17549375879)
    );
  });
  it("should read 24573510713", function () {
    assert(
      "أربعة وعشرون بليونًا وخمسمائة وثلاثة وسبعون مليونًا وخمسمائة وعشرة آلاف وسبعمائة وثلاثة عشر",
      parse(24573510713)
    );
  });
  it("should read 13090782200", function () {
    assert(
      "ثلاثة عشر بليونًا وتسعون مليونًا وسبعمائة واثنان وثمانون ألفًا ومائتان",
      parse(13090782200)
    );
  });
  it("should read 17325832908", function () {
    assert(
      "سبعة عشر بليونًا وثلاثمائة وخمسة وعشرون مليونًا وثمانمائة واثنان وثلاثون ألفًا وتسعمائة وثمانية",
      parse(17325832908)
    );
  });
  it("should read 11702418789", function () {
    assert(
      "أحد عشر بليونًا وسبعمائة ومليونان وأربعمائة وثمانية عشر ألفًا وسبعمائة وتسعة وثمانون",
      parse(11702418789)
    );
  });
  it("should read 20058888710", function () {
    assert(
      "عشرون بليونًا وثمانية وخمسون مليونًا وثمانمائة وثمانية وثمانون ألفًا وسبعمائة وعشرة",
      parse(20058888710)
    );
  });
  it("should read 11736974144", function () {
    assert(
      "أحد عشر بليونًا وسبعمائة وستة وثلاثون مليونًا وتسعمائة وأربعة وسبعون ألفًا ومائة وأربعة وأربعون",
      parse(11736974144)
    );
  });
  it("should read 13132701821", function () {
    assert(
      "ثلاثة عشر بليونًا ومائة واثنان وثلاثون مليونًا وسبعمائة وألف وثمانمائة وواحد وعشرون",
      parse(13132701821)
    );
  });
  it("should read 5892655810", function () {
    assert(
      "خمسة بلايين وثمانمائة واثنان وتسعون مليونًا وستمائة وخمسة وخمسون ألفًا وثمانمائة وعشرة",
      parse(5892655810)
    );
  });
  it("should read 6041687548", function () {
    assert(
      "ستة بلايين وواحد وأربعون مليونًا وستمائة وسبعة وثمانون ألفًا وخمسمائة وثمانية وأربعون",
      parse(6041687548)
    );
  });
  it("should read 28663361539", function () {
    assert(
      "ثمانية وعشرون بليونًا وستمائة وثلاثة وستون مليونًا وثلاثمائة وواحد وستون ألفًا وخمسمائة وتسعة وثلاثون",
      parse(28663361539)
    );
  });
  it("should read 5617449577", function () {
    assert(
      "خمسة بلايين وستمائة وسبعة عشر مليونًا وأربعمائة وتسعة وأربعون ألفًا وخمسمائة وسبعة وسبعون",
      parse(5617449577)
    );
  });
  it("should read 27062301919", function () {
    assert(
      "سبعة وعشرون بليونًا واثنان وستون مليونًا وثلاثمائة وألف وتسعمائة وتسعة عشر",
      parse(27062301919)
    );
  });
  it("should read 17002198158", function () {
    assert(
      "سبعة عشر بليونًا ومليونان ومائة وثمانية وتسعون ألفًا ومائة وثمانية وخمسون",
      parse(17002198158)
    );
  });
  it("should read 9146687025", function () {
    assert(
      "تسعة بلايين ومائة وستة وأربعون مليونًا وستمائة وسبعة وثمانون ألفًا وخمسة وعشرون",
      parse(9146687025)
    );
  });
  it("should read 10247792142", function () {
    assert(
      "عشرة بلايين ومائتان وسبعة وأربعون مليونًا وسبعمائة واثنان وتسعون ألفًا ومائة واثنان وأربعون",
      parse(10247792142)
    );
  });
  it("should read 14968411589", function () {
    assert(
      "أربعة عشر بليونًا وتسعمائة وثمانية وستون مليونًا وأربعمائة وأحد عشر ألفًا وخمسمائة وتسعة وثمانون",
      parse(14968411589)
    );
  });
  it("should read 7719040808", function () {
    assert(
      "سبعة بلايين وسبعمائة وتسعة عشر مليونًا وأربعون ألفًا وثمانمائة وثمانية",
      parse(7719040808)
    );
  });
  it("should read 23254640607", function () {
    assert(
      "ثلاثة وعشرون بليونًا ومائتان وأربعة وخمسون مليونًا وستمائة وأربعون ألفًا وستمائة وسبعة",
      parse(23254640607)
    );
  });
  it("should read 26122838929", function () {
    assert(
      "ستة وعشرون بليونًا ومائة واثنان وعشرون مليونًا وثمانمائة وثمانية وثلاثون ألفًا وتسعمائة وتسعة وعشرون",
      parse(26122838929)
    );
  });
  it("should read 18154400640", function () {
    assert(
      "ثمانية عشر بليونًا ومائة وأربعة وخمسون مليونًا وأربعمائة ألف وستمائة وأربعون",
      parse(18154400640)
    );
  });
  it("should read 16445104913", function () {
    assert(
      "ستة عشر بليونًا وأربعمائة وخمسة وأربعون مليونًا ومائة وأربعة آلاف وتسعمائة وثلاثة عشر",
      parse(16445104913)
    );
  });
  it("should read 7457483714", function () {
    assert(
      "سبعة بلايين وأربعمائة وسبعة وخمسون مليونًا وأربعمائة وثلاثة وثمانون ألفًا وسبعمائة وأربعة عشر",
      parse(7457483714)
    );
  });
  it("should read 19710718784", function () {
    assert(
      "تسعة عشر بليونًا وسبعمائة وعشرة ملايين وسبعمائة وثمانية عشر ألفًا وسبعمائة وأربعة وثمانون",
      parse(19710718784)
    );
  });
  it("should read 26095930784", function () {
    assert(
      "ستة وعشرون بليونًا وخمسة وتسعون مليونًا وتسعمائة وثلاثون ألفًا وسبعمائة وأربعة وثمانون",
      parse(26095930784)
    );
  });
  it("should read 22669704619", function () {
    assert(
      "اثنان وعشرون بليونًا وستمائة وتسعة وستون مليونًا وسبعمائة وأربعة آلاف وستمائة وتسعة عشر",
      parse(22669704619)
    );
  });
  it("should read 4901736236", function () {
    assert(
      "أربعة بلايين وتسعمائة ومليون وسبعمائة وستة وثلاثون ألفًا ومائتان وستة وثلاثون",
      parse(4901736236)
    );
  });
  it("should read 21182875682", function () {
    assert(
      "واحد وعشرون بليونًا ومائة واثنان وثمانون مليونًا وثمانمائة وخمسة وسبعون ألفًا وستمائة واثنان وثمانون",
      parse(21182875682)
    );
  });
  it("should read 24012180238", function () {
    assert(
      "أربعة وعشرون بليونًا وإثنا عشر مليونًا ومائة وثمانون ألفًا ومائتان وثمانية وثلاثون",
      parse(24012180238)
    );
  });
  it("should read 10299990268", function () {
    assert(
      "عشرة بلايين ومائتان وتسعة وتسعون مليونًا وتسعمائة وتسعون ألفًا ومائتان وثمانية وستون",
      parse(10299990268)
    );
  });
  it("should read 5230145059", function () {
    assert(
      "خمسة بلايين ومائتان وثلاثون مليونًا ومائة وخمسة وأربعون ألفًا وتسعة وخمسون",
      parse(5230145059)
    );
  });
  it("should read 8954712346", function () {
    assert(
      "ثمانية بلايين وتسعمائة وأربعة وخمسون مليونًا وسبعمائة وإثنا عشر ألفًا وثلاثمائة وستة وأربعون",
      parse(8954712346)
    );
  });
  it("should read 18198819713", function () {
    assert(
      "ثمانية عشر بليونًا ومائة وثمانية وتسعون مليونًا وثمانمائة وتسعة عشر ألفًا وسبعمائة وثلاثة عشر",
      parse(18198819713)
    );
  });
  it("should read 16908145372", function () {
    assert(
      "ستة عشر بليونًا وتسعمائة وثمانية ملايين ومائة وخمسة وأربعون ألفًا وثلاثمائة واثنان وسبعون",
      parse(16908145372)
    );
  });
  it("should read 18507225853", function () {
    assert(
      "ثمانية عشر بليونًا وخمسمائة وسبعة ملايين ومائتان وخمسة وعشرون ألفًا وثمانمائة وثلاثة وخمسون",
      parse(18507225853)
    );
  });
  it("should read 16740511724", function () {
    assert(
      "ستة عشر بليونًا وسبعمائة وأربعون مليونًا وخمسمائة وأحد عشر ألفًا وسبعمائة وأربعة وعشرون",
      parse(16740511724)
    );
  });
  it("should read 9543528906", function () {
    assert(
      "تسعة بلايين وخمسمائة وثلاثة وأربعون مليونًا وخمسمائة وثمانية وعشرون ألفًا وتسعمائة وستة",
      parse(9543528906)
    );
  });
  it("should read 10254540577", function () {
    assert(
      "عشرة بلايين ومائتان وأربعة وخمسون مليونًا وخمسمائة وأربعون ألفًا وخمسمائة وسبعة وسبعون",
      parse(10254540577)
    );
  });
  it("should read 14310018993", function () {
    assert(
      "أربعة عشر بليونًا وثلاثمائة وعشرة ملايين وثمانية عشر ألفًا وتسعمائة وثلاثة وتسعون",
      parse(14310018993)
    );
  });
  it("should read 12434095567", function () {
    assert(
      "إثنا عشر بليونًا وأربعمائة وأربعة وثلاثون مليونًا وخمسة وتسعون ألفًا وخمسمائة وسبعة وستون",
      parse(12434095567)
    );
  });
  it("should read 8866786130", function () {
    assert(
      "ثمانية بلايين وثمانمائة وستة وستون مليونًا وسبعمائة وستة وثمانون ألفًا ومائة وثلاثون",
      parse(8866786130)
    );
  });
  it("should read 4910693023", function () {
    assert(
      "أربعة بلايين وتسعمائة وعشرة ملايين وستمائة وثلاثة وتسعون ألفًا وثلاثة وعشرون",
      parse(4910693023)
    );
  });
  it("should read 15719814530", function () {
    assert(
      "خمسة عشر بليونًا وسبعمائة وتسعة عشر مليونًا وثمانمائة وأربعة عشر ألفًا وخمسمائة وثلاثون",
      parse(15719814530)
    );
  });
  it("should read 17264120848", function () {
    assert(
      "سبعة عشر بليونًا ومائتان وأربعة وستون مليونًا ومائة وعشرون ألفًا وثمانمائة وثمانية وأربعون",
      parse(17264120848)
    );
  });
  it("should read 28100108450", function () {
    assert(
      "ثمانية وعشرون بليونًا ومائة مليون ومائة وثمانية آلاف وأربعمائة وخمسون",
      parse(28100108450)
    );
  });
  it("should read 5739309086", function () {
    assert(
      "خمسة بلايين وسبعمائة وتسعة وثلاثون مليونًا وثلاثمائة وتسعة آلاف وستة وثمانون",
      parse(5739309086)
    );
  });
  it("should read 24106249219", function () {
    assert(
      "أربعة وعشرون بليونًا ومائة وستة ملايين ومائتان وتسعة وأربعون ألفًا ومائتان وتسعة عشر",
      parse(24106249219)
    );
  });
  it("should read 8729465105", function () {
    assert(
      "ثمانية بلايين وسبعمائة وتسعة وعشرون مليونًا وأربعمائة وخمسة وستون ألفًا ومائة وخمسة",
      parse(8729465105)
    );
  });
  it("should read 5854266467", function () {
    assert(
      "خمسة بلايين وثمانمائة وأربعة وخمسون مليونًا ومائتان وستة وستون ألفًا وأربعمائة وسبعة وستون",
      parse(5854266467)
    );
  });
  it("should read 14825638026", function () {
    assert(
      "أربعة عشر بليونًا وثمانمائة وخمسة وعشرون مليونًا وستمائة وثمانية وثلاثون ألفًا وستة وعشرون",
      parse(14825638026)
    );
  });
  it("should read 11306805287", function () {
    assert(
      "أحد عشر بليونًا وثلاثمائة وستة ملايين وثمانمائة وخمسة آلاف ومائتان وسبعة وثمانون",
      parse(11306805287)
    );
  });
  it("should read 11186016947", function () {
    assert(
      "أحد عشر بليونًا ومائة وستة وثمانون مليونًا وستة عشر ألفًا وتسعمائة وسبعة وأربعون",
      parse(11186016947)
    );
  });
  it("should read 24448441654", function () {
    assert(
      "أربعة وعشرون بليونًا وأربعمائة وثمانية وأربعون مليونًا وأربعمائة وواحد وأربعون ألفًا وستمائة وأربعة وخمسون",
      parse(24448441654)
    );
  });
  it("should read 29486951684", function () {
    assert(
      "تسعة وعشرون بليونًا وأربعمائة وستة وثمانون مليونًا وتسعمائة وواحد وخمسون ألفًا وستمائة وأربعة وثمانون",
      parse(29486951684)
    );
  });
  it("should read 14822255987", function () {
    assert(
      "أربعة عشر بليونًا وثمانمائة واثنان وعشرون مليونًا ومائتان وخمسة وخمسون ألفًا وتسعمائة وسبعة وثمانون",
      parse(14822255987)
    );
  });
  it("should read 7195270870", function () {
    assert(
      "سبعة بلايين ومائة وخمسة وتسعون مليونًا ومائتان وسبعون ألفًا وثمانمائة وسبعون",
      parse(7195270870)
    );
  });
  it("should read 17298811946", function () {
    assert(
      "سبعة عشر بليونًا ومائتان وثمانية وتسعون مليونًا وثمانمائة وأحد عشر ألفًا وتسعمائة وستة وأربعون",
      parse(17298811946)
    );
  });
  it("should read 16753796038", function () {
    assert(
      "ستة عشر بليونًا وسبعمائة وثلاثة وخمسون مليونًا وسبعمائة وستة وتسعون ألفًا وثمانية وثلاثون",
      parse(16753796038)
    );
  });
  it("should read 18145241865", function () {
    assert(
      "ثمانية عشر بليونًا ومائة وخمسة وأربعون مليونًا ومائتان وواحد وأربعون ألفًا وثمانمائة وخمسة وستون",
      parse(18145241865)
    );
  });
  it("should read 28230989214", function () {
    assert(
      "ثمانية وعشرون بليونًا ومائتان وثلاثون مليونًا وتسعمائة وتسعة وثمانون ألفًا ومائتان وأربعة عشر",
      parse(28230989214)
    );
  });
  it("should read 15311859683", function () {
    assert(
      "خمسة عشر بليونًا وثلاثمائة وأحد عشر مليونًا وثمانمائة وتسعة وخمسون ألفًا وستمائة وثلاثة وثمانون",
      parse(15311859683)
    );
  });
  it("should read 22340874950", function () {
    assert(
      "اثنان وعشرون بليونًا وثلاثمائة وأربعون مليونًا وثمانمائة وأربعة وسبعون ألفًا وتسعمائة وخمسون",
      parse(22340874950)
    );
  });
  it("should read 11507306519", function () {
    assert(
      "أحد عشر بليونًا وخمسمائة وسبعة ملايين وثلاثمائة وستة آلاف وخمسمائة وتسعة عشر",
      parse(11507306519)
    );
  });
  it("should read 21336861122", function () {
    assert(
      "واحد وعشرون بليونًا وثلاثمائة وستة وثلاثون مليونًا وثمانمائة وواحد وستون ألفًا ومائة واثنان وعشرون",
      parse(21336861122)
    );
  });
  it("should read 20886784449", function () {
    assert(
      "عشرون بليونًا وثمانمائة وستة وثمانون مليونًا وسبعمائة وأربعة وثمانون ألفًا وأربعمائة وتسعة وأربعون",
      parse(20886784449)
    );
  });
  it("should read 6177427871", function () {
    assert(
      "ستة بلايين ومائة وسبعة وسبعون مليونًا وأربعمائة وسبعة وعشرون ألفًا وثمانمائة وواحد وسبعون",
      parse(6177427871)
    );
  });
  it("should read 13955622134", function () {
    assert(
      "ثلاثة عشر بليونًا وتسعمائة وخمسة وخمسون مليونًا وستمائة واثنان وعشرون ألفًا ومائة وأربعة وثلاثون",
      parse(13955622134)
    );
  });
  it("should read 5899748333", function () {
    assert(
      "خمسة بلايين وثمانمائة وتسعة وتسعون مليونًا وسبعمائة وثمانية وأربعون ألفًا وثلاثمائة وثلاثة وثلاثون",
      parse(5899748333)
    );
  });
  it("should read 17147013754", function () {
    assert(
      "سبعة عشر بليونًا ومائة وسبعة وأربعون مليونًا وثلاثة عشر ألفًا وسبعمائة وأربعة وخمسون",
      parse(17147013754)
    );
  });
  it("should read 10711783722", function () {
    assert(
      "عشرة بلايين وسبعمائة وأحد عشر مليونًا وسبعمائة وثلاثة وثمانون ألفًا وسبعمائة واثنان وعشرون",
      parse(10711783722)
    );
  });
  it("should read 17713698886", function () {
    assert(
      "سبعة عشر بليونًا وسبعمائة وثلاثة عشر مليونًا وستمائة وثمانية وتسعون ألفًا وثمانمائة وستة وثمانون",
      parse(17713698886)
    );
  });
  it("should read 9878788350", function () {
    assert(
      "تسعة بلايين وثمانمائة وثمانية وسبعون مليونًا وسبعمائة وثمانية وثمانون ألفًا وثلاثمائة وخمسون",
      parse(9878788350)
    );
  });
  it("should read 8824840917", function () {
    assert(
      "ثمانية بلايين وثمانمائة وأربعة وعشرون مليونًا وثمانمائة وأربعون ألفًا وتسعمائة وسبعة عشر",
      parse(8824840917)
    );
  });
  it("should read 12658922510", function () {
    assert(
      "إثنا عشر بليونًا وستمائة وثمانية وخمسون مليونًا وتسعمائة واثنان وعشرون ألفًا وخمسمائة وعشرة",
      parse(12658922510)
    );
  });
  it("should read 13050663901", function () {
    assert(
      "ثلاثة عشر بليونًا وخمسون مليونًا وستمائة وثلاثة وستون ألفًا وتسعمائة وواحد",
      parse(13050663901)
    );
  });
  it("should read 21358918713", function () {
    assert(
      "واحد وعشرون بليونًا وثلاثمائة وثمانية وخمسون مليونًا وتسعمائة وثمانية عشر ألفًا وسبعمائة وثلاثة عشر",
      parse(21358918713)
    );
  });
  it("should read 11304357873", function () {
    assert(
      "أحد عشر بليونًا وثلاثمائة وأربعة ملايين وثلاثمائة وسبعة وخمسون ألفًا وثمانمائة وثلاثة وسبعون",
      parse(11304357873)
    );
  });
  it("should read 16270412927", function () {
    assert(
      "ستة عشر بليونًا ومائتان وسبعون مليونًا وأربعمائة وإثنا عشر ألفًا وتسعمائة وسبعة وعشرون",
      parse(16270412927)
    );
  });
  it("should read 10072211931", function () {
    assert(
      "عشرة بلايين واثنان وسبعون مليونًا ومائتان وأحد عشر ألفًا وتسعمائة وواحد وثلاثون",
      parse(10072211931)
    );
  });
  it("should read 29367603014", function () {
    assert(
      "تسعة وعشرون بليونًا وثلاثمائة وسبعة وستون مليونًا وستمائة وثلاثة آلاف وأربعة عشر",
      parse(29367603014)
    );
  });
  it("should read 26466690824", function () {
    assert(
      "ستة وعشرون بليونًا وأربعمائة وستة وستون مليونًا وستمائة وتسعون ألفًا وثمانمائة وأربعة وعشرون",
      parse(26466690824)
    );
  });
  it("should read 17081363367", function () {
    assert(
      "سبعة عشر بليونًا وواحد وثمانون مليونًا وثلاثمائة وثلاثة وستون ألفًا وثلاثمائة وسبعة وستون",
      parse(17081363367)
    );
  });
  it("should read 13767638897", function () {
    assert(
      "ثلاثة عشر بليونًا وسبعمائة وسبعة وستون مليونًا وستمائة وثمانية وثلاثون ألفًا وثمانمائة وسبعة وتسعون",
      parse(13767638897)
    );
  });
  it("should read 21380038841", function () {
    assert(
      "واحد وعشرون بليونًا وثلاثمائة وثمانون مليونًا وثمانية وثلاثون ألفًا وثمانمائة وواحد وأربعون",
      parse(21380038841)
    );
  });
  it("should read 28942122636", function () {
    assert(
      "ثمانية وعشرون بليونًا وتسعمائة واثنان وأربعون مليونًا ومائة واثنان وعشرون ألفًا وستمائة وستة وثلاثون",
      parse(28942122636)
    );
  });
  it("should read 23793680848", function () {
    assert(
      "ثلاثة وعشرون بليونًا وسبعمائة وثلاثة وتسعون مليونًا وستمائة وثمانون ألفًا وثمانمائة وثمانية وأربعون",
      parse(23793680848)
    );
  });
  it("should read 4444391488", function () {
    assert(
      "أربعة بلايين وأربعمائة وأربعة وأربعون مليونًا وثلاثمائة وواحد وتسعون ألفًا وأربعمائة وثمانية وثمانون",
      parse(4444391488)
    );
  });
  it("should read 24413312973", function () {
    assert(
      "أربعة وعشرون بليونًا وأربعمائة وثلاثة عشر مليونًا وثلاثمائة وإثنا عشر ألفًا وتسعمائة وثلاثة وسبعون",
      parse(24413312973)
    );
  });
  it("should read 19787468446", function () {
    assert(
      "تسعة عشر بليونًا وسبعمائة وسبعة وثمانون مليونًا وأربعمائة وثمانية وستون ألفًا وأربعمائة وستة وأربعون",
      parse(19787468446)
    );
  });
  it("should read 10028410250", function () {
    assert(
      "عشرة بلايين وثمانية وعشرون مليونًا وأربعمائة وعشرة آلاف ومائتان وخمسون",
      parse(10028410250)
    );
  });
  it("should read 4707953615", function () {
    assert(
      "أربعة بلايين وسبعمائة وسبعة ملايين وتسعمائة وثلاثة وخمسون ألفًا وستمائة وخمسة عشر",
      parse(4707953615)
    );
  });
  it("should read 21363096125", function () {
    assert(
      "واحد وعشرون بليونًا وثلاثمائة وثلاثة وستون مليونًا وستة وتسعون ألفًا ومائة وخمسة وعشرون",
      parse(21363096125)
    );
  });
  it("should read 25989524731", function () {
    assert(
      "خمسة وعشرون بليونًا وتسعمائة وتسعة وثمانون مليونًا وخمسمائة وأربعة وعشرون ألفًا وسبعمائة وواحد وثلاثون",
      parse(25989524731)
    );
  });
  it("should read 27941858416", function () {
    assert(
      "سبعة وعشرون بليونًا وتسعمائة وواحد وأربعون مليونًا وثمانمائة وثمانية وخمسون ألفًا وأربعمائة وستة عشر",
      parse(27941858416)
    );
  });
  it("should read 22352836458", function () {
    assert(
      "اثنان وعشرون بليونًا وثلاثمائة واثنان وخمسون مليونًا وثمانمائة وستة وثلاثون ألفًا وأربعمائة وثمانية وخمسون",
      parse(22352836458)
    );
  });
  it("should read 9880062880", function () {
    assert(
      "تسعة بلايين وثمانمائة وثمانون مليونًا واثنان وستون ألفًا وثمانمائة وثمانون",
      parse(9880062880)
    );
  });
  it("should read 8395335345", function () {
    assert(
      "ثمانية بلايين وثلاثمائة وخمسة وتسعون مليونًا وثلاثمائة وخمسة وثلاثون ألفًا وثلاثمائة وخمسة وأربعون",
      parse(8395335345)
    );
  });
  it("should read 11420684987", function () {
    assert(
      "أحد عشر بليونًا وأربعمائة وعشرون مليونًا وستمائة وأربعة وثمانون ألفًا وتسعمائة وسبعة وثمانون",
      parse(11420684987)
    );
  });
  it("should read 13660909510", function () {
    assert(
      "ثلاثة عشر بليونًا وستمائة وستون مليونًا وتسعمائة وتسعة آلاف وخمسمائة وعشرة",
      parse(13660909510)
    );
  });
  it("should read 10718955322", function () {
    assert(
      "عشرة بلايين وسبعمائة وثمانية عشر مليونًا وتسعمائة وخمسة وخمسون ألفًا وثلاثمائة واثنان وعشرون",
      parse(10718955322)
    );
  });
  it("should read 11609724066", function () {
    assert(
      "أحد عشر بليونًا وستمائة وتسعة ملايين وسبعمائة وأربعة وعشرون ألفًا وستة وستون",
      parse(11609724066)
    );
  });
  it("should read 14944710435", function () {
    assert(
      "أربعة عشر بليونًا وتسعمائة وأربعة وأربعون مليونًا وسبعمائة وعشرة آلاف وأربعمائة وخمسة وثلاثون",
      parse(14944710435)
    );
  });
  it("should read 28810817062", function () {
    assert(
      "ثمانية وعشرون بليونًا وثمانمائة وعشرة ملايين وثمانمائة وسبعة عشر ألفًا واثنان وستون",
      parse(28810817062)
    );
  });
  it("should read 8634294048", function () {
    assert(
      "ثمانية بلايين وستمائة وأربعة وثلاثون مليونًا ومائتان وأربعة وتسعون ألفًا وثمانية وأربعون",
      parse(8634294048)
    );
  });
  it("should read 14354837938", function () {
    assert(
      "أربعة عشر بليونًا وثلاثمائة وأربعة وخمسون مليونًا وثمانمائة وسبعة وثلاثون ألفًا وتسعمائة وثمانية وثلاثون",
      parse(14354837938)
    );
  });
  it("should read 22709426109", function () {
    assert(
      "اثنان وعشرون بليونًا وسبعمائة وتسعة ملايين وأربعمائة وستة وعشرون ألفًا ومائة وتسعة",
      parse(22709426109)
    );
  });
  it("should read 8784559182", function () {
    assert(
      "ثمانية بلايين وسبعمائة وأربعة وثمانون مليونًا وخمسمائة وتسعة وخمسون ألفًا ومائة واثنان وثمانون",
      parse(8784559182)
    );
  });
  it("should read 14596026443", function () {
    assert(
      "أربعة عشر بليونًا وخمسمائة وستة وتسعون مليونًا وستة وعشرون ألفًا وأربعمائة وثلاثة وأربعون",
      parse(14596026443)
    );
  });
  it("should read 20791680931", function () {
    assert(
      "عشرون بليونًا وسبعمائة وواحد وتسعون مليونًا وستمائة وثمانون ألفًا وتسعمائة وواحد وثلاثون",
      parse(20791680931)
    );
  });
  it("should read 17279649525", function () {
    assert(
      "سبعة عشر بليونًا ومائتان وتسعة وسبعون مليونًا وستمائة وتسعة وأربعون ألفًا وخمسمائة وخمسة وعشرون",
      parse(17279649525)
    );
  });
  it("should read 9431449004", function () {
    assert(
      "تسعة بلايين وأربعمائة وواحد وثلاثون مليونًا وأربعمائة وتسعة وأربعون ألفًا وأربعة",
      parse(9431449004)
    );
  });
  it("should read 15523120587", function () {
    assert(
      "خمسة عشر بليونًا وخمسمائة وثلاثة وعشرون مليونًا ومائة وعشرون ألفًا وخمسمائة وسبعة وثمانون",
      parse(15523120587)
    );
  });
  it("should read 18379333460", function () {
    assert(
      "ثمانية عشر بليونًا وثلاثمائة وتسعة وسبعون مليونًا وثلاثمائة وثلاثة وثلاثون ألفًا وأربعمائة وستون",
      parse(18379333460)
    );
  });
  it("should read 24299886283", function () {
    assert(
      "أربعة وعشرون بليونًا ومائتان وتسعة وتسعون مليونًا وثمانمائة وستة وثمانون ألفًا ومائتان وثلاثة وثمانون",
      parse(24299886283)
    );
  });
  it("should read 8704709326", function () {
    assert(
      "ثمانية بلايين وسبعمائة وأربعة ملايين وسبعمائة وتسعة آلاف وثلاثمائة وستة وعشرون",
      parse(8704709326)
    );
  });
  it("should read 28463726249", function () {
    assert(
      "ثمانية وعشرون بليونًا وأربعمائة وثلاثة وستون مليونًا وسبعمائة وستة وعشرون ألفًا ومائتان وتسعة وأربعون",
      parse(28463726249)
    );
  });
  it("should read 7762244288", function () {
    assert(
      "سبعة بلايين وسبعمائة واثنان وستون مليونًا ومائتان وأربعة وأربعون ألفًا ومائتان وثمانية وثمانون",
      parse(7762244288)
    );
  });
  it("should read 5040187052", function () {
    assert(
      "خمسة بلايين وأربعون مليونًا ومائة وسبعة وثمانون ألفًا واثنان وخمسون",
      parse(5040187052)
    );
  });
  it("should read 9357515540", function () {
    assert(
      "تسعة بلايين وثلاثمائة وسبعة وخمسون مليونًا وخمسمائة وخمسة عشر ألفًا وخمسمائة وأربعون",
      parse(9357515540)
    );
  });
  it("should read 25026983022", function () {
    assert(
      "خمسة وعشرون بليونًا وستة وعشرون مليونًا وتسعمائة وثلاثة وثمانون ألفًا واثنان وعشرون",
      parse(25026983022)
    );
  });
  it("should read 16816539290", function () {
    assert(
      "ستة عشر بليونًا وثمانمائة وستة عشر مليونًا وخمسمائة وتسعة وثلاثون ألفًا ومائتان وتسعون",
      parse(16816539290)
    );
  });
  it("should read 6295350463", function () {
    assert(
      "ستة بلايين ومائتان وخمسة وتسعون مليونًا وثلاثمائة وخمسون ألفًا وأربعمائة وثلاثة وستون",
      parse(6295350463)
    );
  });
  it("should read 11207326897", function () {
    assert(
      "أحد عشر بليونًا ومائتان وسبعة ملايين وثلاثمائة وستة وعشرون ألفًا وثمانمائة وسبعة وتسعون",
      parse(11207326897)
    );
  });
  it("should read 14236121201", function () {
    assert(
      "أربعة عشر بليونًا ومائتان وستة وثلاثون مليونًا ومائة وواحد وعشرون ألفًا ومائتان وواحد",
      parse(14236121201)
    );
  });
  it("should read 24295998451", function () {
    assert(
      "أربعة وعشرون بليونًا ومائتان وخمسة وتسعون مليونًا وتسعمائة وثمانية وتسعون ألفًا وأربعمائة وواحد وخمسون",
      parse(24295998451)
    );
  });
  it("should read 13812434368", function () {
    assert(
      "ثلاثة عشر بليونًا وثمانمائة وإثنا عشر مليونًا وأربعمائة وأربعة وثلاثون ألفًا وثلاثمائة وثمانية وستون",
      parse(13812434368)
    );
  });
  it("should read 27356977821", function () {
    assert(
      "سبعة وعشرون بليونًا وثلاثمائة وستة وخمسون مليونًا وتسعمائة وسبعة وسبعون ألفًا وثمانمائة وواحد وعشرون",
      parse(27356977821)
    );
  });
  it("should read 20529563570", function () {
    assert(
      "عشرون بليونًا وخمسمائة وتسعة وعشرون مليونًا وخمسمائة وثلاثة وستون ألفًا وخمسمائة وسبعون",
      parse(20529563570)
    );
  });
  it("should read 27676250355", function () {
    assert(
      "سبعة وعشرون بليونًا وستمائة وستة وسبعون مليونًا ومائتان وخمسون ألفًا وثلاثمائة وخمسة وخمسون",
      parse(27676250355)
    );
  });
  it("should read 17613702883", function () {
    assert(
      "سبعة عشر بليونًا وستمائة وثلاثة عشر مليونًا وسبعمائة وألفان وثمانمائة وثلاثة وثمانون",
      parse(17613702883)
    );
  });
  it("should read 16168319836", function () {
    assert(
      "ستة عشر بليونًا ومائة وثمانية وستون مليونًا وثلاثمائة وتسعة عشر ألفًا وثمانمائة وستة وثلاثون",
      parse(16168319836)
    );
  });
  it("should read 13983254129", function () {
    assert(
      "ثلاثة عشر بليونًا وتسعمائة وثلاثة وثمانون مليونًا ومائتان وأربعة وخمسون ألفًا ومائة وتسعة وعشرون",
      parse(13983254129)
    );
  });
  it("should read 20950978293", function () {
    assert(
      "عشرون بليونًا وتسعمائة وخمسون مليونًا وتسعمائة وثمانية وسبعون ألفًا ومائتان وثلاثة وتسعون",
      parse(20950978293)
    );
  });
  it("should read 8415267519", function () {
    assert(
      "ثمانية بلايين وأربعمائة وخمسة عشر مليونًا ومائتان وسبعة وستون ألفًا وخمسمائة وتسعة عشر",
      parse(8415267519)
    );
  });
  it("should read 4615823009", function () {
    assert(
      "أربعة بلايين وستمائة وخمسة عشر مليونًا وثمانمائة وثلاثة وعشرون ألفًا وتسعة",
      parse(4615823009)
    );
  });
  it("should read 28391520068", function () {
    assert(
      "ثمانية وعشرون بليونًا وثلاثمائة وواحد وتسعون مليونًا وخمسمائة وعشرون ألفًا وثمانية وستون",
      parse(28391520068)
    );
  });
  it("should read 27455807042", function () {
    assert(
      "سبعة وعشرون بليونًا وأربعمائة وخمسة وخمسون مليونًا وثمانمائة وسبعة آلاف واثنان وأربعون",
      parse(27455807042)
    );
  });
  it("should read 14145971119", function () {
    assert(
      "أربعة عشر بليونًا ومائة وخمسة وأربعون مليونًا وتسعمائة وواحد وسبعون ألفًا ومائة وتسعة عشر",
      parse(14145971119)
    );
  });
  it("should read 22834033242", function () {
    assert(
      "اثنان وعشرون بليونًا وثمانمائة وأربعة وثلاثون مليونًا وثلاثة وثلاثون ألفًا ومائتان واثنان وأربعون",
      parse(22834033242)
    );
  });
  it("should read 11513137464", function () {
    assert(
      "أحد عشر بليونًا وخمسمائة وثلاثة عشر مليونًا ومائة وسبعة وثلاثون ألفًا وأربعمائة وأربعة وستون",
      parse(11513137464)
    );
  });
  it("should read 5997545564", function () {
    assert(
      "خمسة بلايين وتسعمائة وسبعة وتسعون مليونًا وخمسمائة وخمسة وأربعون ألفًا وخمسمائة وأربعة وستون",
      parse(5997545564)
    );
  });
  it("should read 24031039598", function () {
    assert(
      "أربعة وعشرون بليونًا وواحد وثلاثون مليونًا وتسعة وثلاثون ألفًا وخمسمائة وثمانية وتسعون",
      parse(24031039598)
    );
  });
  it("should read 17465301795", function () {
    assert(
      "سبعة عشر بليونًا وأربعمائة وخمسة وستون مليونًا وثلاثمائة وألف وسبعمائة وخمسة وتسعون",
      parse(17465301795)
    );
  });
  it("should read 21114571194", function () {
    assert(
      "واحد وعشرون بليونًا ومائة وأربعة عشر مليونًا وخمسمائة وواحد وسبعون ألفًا ومائة وأربعة وتسعون",
      parse(21114571194)
    );
  });
  it("should read 8243203377", function () {
    assert(
      "ثمانية بلايين ومائتان وثلاثة وأربعون مليونًا ومائتان وثلاثة آلاف وثلاثمائة وسبعة وسبعون",
      parse(8243203377)
    );
  });
  it("should read 14241157957", function () {
    assert(
      "أربعة عشر بليونًا ومائتان وواحد وأربعون مليونًا ومائة وسبعة وخمسون ألفًا وتسعمائة وسبعة وخمسون",
      parse(14241157957)
    );
  });
  it("should read 28327301663", function () {
    assert(
      "ثمانية وعشرون بليونًا وثلاثمائة وسبعة وعشرون مليونًا وثلاثمائة وألف وستمائة وثلاثة وستون",
      parse(28327301663)
    );
  });
  it("should read 15067766449", function () {
    assert(
      "خمسة عشر بليونًا وسبعة وستون مليونًا وسبعمائة وستة وستون ألفًا وأربعمائة وتسعة وأربعون",
      parse(15067766449)
    );
  });
  it("should read 17693148546", function () {
    assert(
      "سبعة عشر بليونًا وستمائة وثلاثة وتسعون مليونًا ومائة وثمانية وأربعون ألفًا وخمسمائة وستة وأربعون",
      parse(17693148546)
    );
  });
  it("should read 5863028067", function () {
    assert(
      "خمسة بلايين وثمانمائة وثلاثة وستون مليونًا وثمانية وعشرون ألفًا وسبعة وستون",
      parse(5863028067)
    );
  });
  it("should read 11473362238", function () {
    assert(
      "أحد عشر بليونًا وأربعمائة وثلاثة وسبعون مليونًا وثلاثمائة واثنان وستون ألفًا ومائتان وثمانية وثلاثون",
      parse(11473362238)
    );
  });
  it("should read 12534581644", function () {
    assert(
      "إثنا عشر بليونًا وخمسمائة وأربعة وثلاثون مليونًا وخمسمائة وواحد وثمانون ألفًا وستمائة وأربعة وأربعون",
      parse(12534581644)
    );
  });
  it("should read 25220166559", function () {
    assert(
      "خمسة وعشرون بليونًا ومائتان وعشرون مليونًا ومائة وستة وستون ألفًا وخمسمائة وتسعة وخمسون",
      parse(25220166559)
    );
  });
  it("should read 28675664942", function () {
    assert(
      "ثمانية وعشرون بليونًا وستمائة وخمسة وسبعون مليونًا وستمائة وأربعة وستون ألفًا وتسعمائة واثنان وأربعون",
      parse(28675664942)
    );
  });
  it("should read 9220316941", function () {
    assert(
      "تسعة بلايين ومائتان وعشرون مليونًا وثلاثمائة وستة عشر ألفًا وتسعمائة وواحد وأربعون",
      parse(9220316941)
    );
  });
  it("should read 19439388384", function () {
    assert(
      "تسعة عشر بليونًا وأربعمائة وتسعة وثلاثون مليونًا وثلاثمائة وثمانية وثمانون ألفًا وثلاثمائة وأربعة وثمانون",
      parse(19439388384)
    );
  });
  it("should read 29332683939", function () {
    assert(
      "تسعة وعشرون بليونًا وثلاثمائة واثنان وثلاثون مليونًا وستمائة وثلاثة وثمانون ألفًا وتسعمائة وتسعة وثلاثون",
      parse(29332683939)
    );
  });
  it("should read 24569182611", function () {
    assert(
      "أربعة وعشرون بليونًا وخمسمائة وتسعة وستون مليونًا ومائة واثنان وثمانون ألفًا وستمائة وأحد عشر",
      parse(24569182611)
    );
  });
  it("should read 13452466203", function () {
    assert(
      "ثلاثة عشر بليونًا وأربعمائة واثنان وخمسون مليونًا وأربعمائة وستة وستون ألفًا ومائتان وثلاثة",
      parse(13452466203)
    );
  });
  it("should read 6499812903", function () {
    assert(
      "ستة بلايين وأربعمائة وتسعة وتسعون مليونًا وثمانمائة وإثنا عشر ألفًا وتسعمائة وثلاثة",
      parse(6499812903)
    );
  });
  it("should read 20795734387", function () {
    assert(
      "عشرون بليونًا وسبعمائة وخمسة وتسعون مليونًا وسبعمائة وأربعة وثلاثون ألفًا وثلاثمائة وسبعة وثمانون",
      parse(20795734387)
    );
  });
  it("should read 8932763202", function () {
    assert(
      "ثمانية بلايين وتسعمائة واثنان وثلاثون مليونًا وسبعمائة وثلاثة وستون ألفًا ومائتان واثنان",
      parse(8932763202)
    );
  });
  it("should read 12123868851", function () {
    assert(
      "إثنا عشر بليونًا ومائة وثلاثة وعشرون مليونًا وثمانمائة وثمانية وستون ألفًا وثمانمائة وواحد وخمسون",
      parse(12123868851)
    );
  });
  it("should read 11110880249", function () {
    assert(
      "أحد عشر بليونًا ومائة وعشرة ملايين وثمانمائة وثمانون ألفًا ومائتان وتسعة وأربعون",
      parse(11110880249)
    );
  });
  it("should read 20451040611", function () {
    assert(
      "عشرون بليونًا وأربعمائة وواحد وخمسون مليونًا وأربعون ألفًا وستمائة وأحد عشر",
      parse(20451040611)
    );
  });
  it("should read 15702943058", function () {
    assert(
      "خمسة عشر بليونًا وسبعمائة ومليونان وتسعمائة وثلاثة وأربعون ألفًا وثمانية وخمسون",
      parse(15702943058)
    );
  });
  it("should read 9296486192", function () {
    assert(
      "تسعة بلايين ومائتان وستة وتسعون مليونًا وأربعمائة وستة وثمانون ألفًا ومائة واثنان وتسعون",
      parse(9296486192)
    );
  });
  it("should read 12647700794", function () {
    assert(
      "إثنا عشر بليونًا وستمائة وسبعة وأربعون مليونًا وسبعمائة ألف وسبعمائة وأربعة وتسعون",
      parse(12647700794)
    );
  });
  it("should read 13008091931", function () {
    assert(
      "ثلاثة عشر بليونًا وثمانية ملايين وواحد وتسعون ألفًا وتسعمائة وواحد وثلاثون",
      parse(13008091931)
    );
  });
  it("should read 27225157369", function () {
    assert(
      "سبعة وعشرون بليونًا ومائتان وخمسة وعشرون مليونًا ومائة وسبعة وخمسون ألفًا وثلاثمائة وتسعة وستون",
      parse(27225157369)
    );
  });
  it("should read 22039858354", function () {
    assert(
      "اثنان وعشرون بليونًا وتسعة وثلاثون مليونًا وثمانمائة وثمانية وخمسون ألفًا وثلاثمائة وأربعة وخمسون",
      parse(22039858354)
    );
  });
  it("should read 6020072370", function () {
    assert(
      "ستة بلايين وعشرون مليونًا واثنان وسبعون ألفًا وثلاثمائة وسبعون",
      parse(6020072370)
    );
  });
  it("should read 21078452307", function () {
    assert(
      "واحد وعشرون بليونًا وثمانية وسبعون مليونًا وأربعمائة واثنان وخمسون ألفًا وثلاثمائة وسبعة",
      parse(21078452307)
    );
  });
  it("should read 17888424577", function () {
    assert(
      "سبعة عشر بليونًا وثمانمائة وثمانية وثمانون مليونًا وأربعمائة وأربعة وعشرون ألفًا وخمسمائة وسبعة وسبعون",
      parse(17888424577)
    );
  });
  it("should read 22802189098", function () {
    assert(
      "اثنان وعشرون بليونًا وثمانمائة ومليونان ومائة وتسعة وثمانون ألفًا وثمانية وتسعون",
      parse(22802189098)
    );
  });
  it("should read 27294112471", function () {
    assert(
      "سبعة وعشرون بليونًا ومائتان وأربعة وتسعون مليونًا ومائة وإثنا عشر ألفًا وأربعمائة وواحد وسبعون",
      parse(27294112471)
    );
  });
  it("should read 16556580634", function () {
    assert(
      "ستة عشر بليونًا وخمسمائة وستة وخمسون مليونًا وخمسمائة وثمانون ألفًا وستمائة وأربعة وثلاثون",
      parse(16556580634)
    );
  });
  it("should read 8184045430", function () {
    assert(
      "ثمانية بلايين ومائة وأربعة وثمانون مليونًا وخمسة وأربعون ألفًا وأربعمائة وثلاثون",
      parse(8184045430)
    );
  });
  it("should read 29931843486", function () {
    assert(
      "تسعة وعشرون بليونًا وتسعمائة وواحد وثلاثون مليونًا وثمانمائة وثلاثة وأربعون ألفًا وأربعمائة وستة وثمانون",
      parse(29931843486)
    );
  });
  it("should read 7003241818", function () {
    assert(
      "سبعة بلايين وثلاثة ملايين ومائتان وواحد وأربعون ألفًا وثمانمائة وثمانية عشر",
      parse(7003241818)
    );
  });
  it("should read 28252233441", function () {
    assert(
      "ثمانية وعشرون بليونًا ومائتان واثنان وخمسون مليونًا ومائتان وثلاثة وثلاثون ألفًا وأربعمائة وواحد وأربعون",
      parse(28252233441)
    );
  });
  it("should read 17671262736", function () {
    assert(
      "سبعة عشر بليونًا وستمائة وواحد وسبعون مليونًا ومائتان واثنان وستون ألفًا وسبعمائة وستة وثلاثون",
      parse(17671262736)
    );
  });
  it("should read 14143738609", function () {
    assert(
      "أربعة عشر بليونًا ومائة وثلاثة وأربعون مليونًا وسبعمائة وثمانية وثلاثون ألفًا وستمائة وتسعة",
      parse(14143738609)
    );
  });
  it("should read 5839976236", function () {
    assert(
      "خمسة بلايين وثمانمائة وتسعة وثلاثون مليونًا وتسعمائة وستة وسبعون ألفًا ومائتان وستة وثلاثون",
      parse(5839976236)
    );
  });
  it("should read 11470348824", function () {
    assert(
      "أحد عشر بليونًا وأربعمائة وسبعون مليونًا وثلاثمائة وثمانية وأربعون ألفًا وثمانمائة وأربعة وعشرون",
      parse(11470348824)
    );
  });
  it("should read 5914772353", function () {
    assert(
      "خمسة بلايين وتسعمائة وأربعة عشر مليونًا وسبعمائة واثنان وسبعون ألفًا وثلاثمائة وثلاثة وخمسون",
      parse(5914772353)
    );
  });
  it("should read 9450641339", function () {
    assert(
      "تسعة بلايين وأربعمائة وخمسون مليونًا وستمائة وواحد وأربعون ألفًا وثلاثمائة وتسعة وثلاثون",
      parse(9450641339)
    );
  });
  it("should read 10649485797", function () {
    assert(
      "عشرة بلايين وستمائة وتسعة وأربعون مليونًا وأربعمائة وخمسة وثمانون ألفًا وسبعمائة وسبعة وتسعون",
      parse(10649485797)
    );
  });
  it("should read 23324749377", function () {
    assert(
      "ثلاثة وعشرون بليونًا وثلاثمائة وأربعة وعشرون مليونًا وسبعمائة وتسعة وأربعون ألفًا وثلاثمائة وسبعة وسبعون",
      parse(23324749377)
    );
  });
  it("should read 15434020605", function () {
    assert(
      "خمسة عشر بليونًا وأربعمائة وأربعة وثلاثون مليونًا وعشرون ألفًا وستمائة وخمسة",
      parse(15434020605)
    );
  });
  it("should read 9107797887", function () {
    assert(
      "تسعة بلايين ومائة وسبعة ملايين وسبعمائة وسبعة وتسعون ألفًا وثمانمائة وسبعة وثمانون",
      parse(9107797887)
    );
  });
  it("should read 23117887555", function () {
    assert(
      "ثلاثة وعشرون بليونًا ومائة وسبعة عشر مليونًا وثمانمائة وسبعة وثمانون ألفًا وخمسمائة وخمسة وخمسون",
      parse(23117887555)
    );
  });
  it("should read 13513857774", function () {
    assert(
      "ثلاثة عشر بليونًا وخمسمائة وثلاثة عشر مليونًا وثمانمائة وسبعة وخمسون ألفًا وسبعمائة وأربعة وسبعون",
      parse(13513857774)
    );
  });
  it("should read 27277272980", function () {
    assert(
      "سبعة وعشرون بليونًا ومائتان وسبعة وسبعون مليونًا ومائتان واثنان وسبعون ألفًا وتسعمائة وثمانون",
      parse(27277272980)
    );
  });
  it("should read 15944029982", function () {
    assert(
      "خمسة عشر بليونًا وتسعمائة وأربعة وأربعون مليونًا وتسعة وعشرون ألفًا وتسعمائة واثنان وثمانون",
      parse(15944029982)
    );
  });
  it("should read 21245186351", function () {
    assert(
      "واحد وعشرون بليونًا ومائتان وخمسة وأربعون مليونًا ومائة وستة وثمانون ألفًا وثلاثمائة وواحد وخمسون",
      parse(21245186351)
    );
  });
  it("should read 15149032735", function () {
    assert(
      "خمسة عشر بليونًا ومائة وتسعة وأربعون مليونًا واثنان وثلاثون ألفًا وسبعمائة وخمسة وثلاثون",
      parse(15149032735)
    );
  });
  it("should read 14934279204", function () {
    assert(
      "أربعة عشر بليونًا وتسعمائة وأربعة وثلاثون مليونًا ومائتان وتسعة وسبعون ألفًا ومائتان وأربعة",
      parse(14934279204)
    );
  });
  it("should read 6092725906", function () {
    assert(
      "ستة بلايين واثنان وتسعون مليونًا وسبعمائة وخمسة وعشرون ألفًا وتسعمائة وستة",
      parse(6092725906)
    );
  });
  it("should read 17476407369", function () {
    assert(
      "سبعة عشر بليونًا وأربعمائة وستة وسبعون مليونًا وأربعمائة وسبعة آلاف وثلاثمائة وتسعة وستون",
      parse(17476407369)
    );
  });
  it("should read 6999047232", function () {
    assert(
      "ستة بلايين وتسعمائة وتسعة وتسعون مليونًا وسبعة وأربعون ألفًا ومائتان واثنان وثلاثون",
      parse(6999047232)
    );
  });
  it("should read 5953770905", function () {
    assert(
      "خمسة بلايين وتسعمائة وثلاثة وخمسون مليونًا وسبعمائة وسبعون ألفًا وتسعمائة وخمسة",
      parse(5953770905)
    );
  });
  it("should read 15041575685", function () {
    assert(
      "خمسة عشر بليونًا وواحد وأربعون مليونًا وخمسمائة وخمسة وسبعون ألفًا وستمائة وخمسة وثمانون",
      parse(15041575685)
    );
  });
  it("should read 9100720295", function () {
    assert(
      "تسعة بلايين ومائة مليون وسبعمائة وعشرون ألفًا ومائتان وخمسة وتسعون",
      parse(9100720295)
    );
  });
  it("should read 18136114523", function () {
    assert(
      "ثمانية عشر بليونًا ومائة وستة وثلاثون مليونًا ومائة وأربعة عشر ألفًا وخمسمائة وثلاثة وعشرون",
      parse(18136114523)
    );
  });
  it("should read 13322698439", function () {
    assert(
      "ثلاثة عشر بليونًا وثلاثمائة واثنان وعشرون مليونًا وستمائة وثمانية وتسعون ألفًا وأربعمائة وتسعة وثلاثون",
      parse(13322698439)
    );
  });
  it("should read 17358946810", function () {
    assert(
      "سبعة عشر بليونًا وثلاثمائة وثمانية وخمسون مليونًا وتسعمائة وستة وأربعون ألفًا وثمانمائة وعشرة",
      parse(17358946810)
    );
  });
  it("should read 28677667043", function () {
    assert(
      "ثمانية وعشرون بليونًا وستمائة وسبعة وسبعون مليونًا وستمائة وسبعة وستون ألفًا وثلاثة وأربعون",
      parse(28677667043)
    );
  });
  it("should read 15977199368", function () {
    assert(
      "خمسة عشر بليونًا وتسعمائة وسبعة وسبعون مليونًا ومائة وتسعة وتسعون ألفًا وثلاثمائة وثمانية وستون",
      parse(15977199368)
    );
  });
  it("should read 28621928835", function () {
    assert(
      "ثمانية وعشرون بليونًا وستمائة وواحد وعشرون مليونًا وتسعمائة وثمانية وعشرون ألفًا وثمانمائة وخمسة وثلاثون",
      parse(28621928835)
    );
  });
  it("should read 6830274270", function () {
    assert(
      "ستة بلايين وثمانمائة وثلاثون مليونًا ومائتان وأربعة وسبعون ألفًا ومائتان وسبعون",
      parse(6830274270)
    );
  });
  it("should read 17360373228", function () {
    assert(
      "سبعة عشر بليونًا وثلاثمائة وستون مليونًا وثلاثمائة وثلاثة وسبعون ألفًا ومائتان وثمانية وعشرون",
      parse(17360373228)
    );
  });
  it("should read 16806707267", function () {
    assert(
      "ستة عشر بليونًا وثمانمائة وستة ملايين وسبعمائة وسبعة آلاف ومائتان وسبعة وستون",
      parse(16806707267)
    );
  });
  it("should read 21826967482", function () {
    assert(
      "واحد وعشرون بليونًا وثمانمائة وستة وعشرون مليونًا وتسعمائة وسبعة وستون ألفًا وأربعمائة واثنان وثمانون",
      parse(21826967482)
    );
  });
  it("should read 17694577499", function () {
    assert(
      "سبعة عشر بليونًا وستمائة وأربعة وتسعون مليونًا وخمسمائة وسبعة وسبعون ألفًا وأربعمائة وتسعة وتسعون",
      parse(17694577499)
    );
  });
  it("should read 22141529569", function () {
    assert(
      "اثنان وعشرون بليونًا ومائة وواحد وأربعون مليونًا وخمسمائة وتسعة وعشرون ألفًا وخمسمائة وتسعة وستون",
      parse(22141529569)
    );
  });
  it("should read 23237567288", function () {
    assert(
      "ثلاثة وعشرون بليونًا ومائتان وسبعة وثلاثون مليونًا وخمسمائة وسبعة وستون ألفًا ومائتان وثمانية وثمانون",
      parse(23237567288)
    );
  });
  it("should read 12152770587", function () {
    assert(
      "إثنا عشر بليونًا ومائة واثنان وخمسون مليونًا وسبعمائة وسبعون ألفًا وخمسمائة وسبعة وثمانون",
      parse(12152770587)
    );
  });
  it("should read 4619133584", function () {
    assert(
      "أربعة بلايين وستمائة وتسعة عشر مليونًا ومائة وثلاثة وثلاثون ألفًا وخمسمائة وأربعة وثمانون",
      parse(4619133584)
    );
  });
  it("should read 10850050268", function () {
    assert(
      "عشرة بلايين وثمانمائة وخمسون مليونًا وخمسون ألفًا ومائتان وثمانية وستون",
      parse(10850050268)
    );
  });
  it("should read 17898758864", function () {
    assert(
      "سبعة عشر بليونًا وثمانمائة وثمانية وتسعون مليونًا وسبعمائة وثمانية وخمسون ألفًا وثمانمائة وأربعة وستون",
      parse(17898758864)
    );
  });
  it("should read 11811413051", function () {
    assert(
      "أحد عشر بليونًا وثمانمائة وأحد عشر مليونًا وأربعمائة وثلاثة عشر ألفًا وواحد وخمسون",
      parse(11811413051)
    );
  });
  it("should read 14108989315", function () {
    assert(
      "أربعة عشر بليونًا ومائة وثمانية ملايين وتسعمائة وتسعة وثمانون ألفًا وثلاثمائة وخمسة عشر",
      parse(14108989315)
    );
  });
  it("should read 10975692604", function () {
    assert(
      "عشرة بلايين وتسعمائة وخمسة وسبعون مليونًا وستمائة واثنان وتسعون ألفًا وستمائة وأربعة",
      parse(10975692604)
    );
  });
  it("should read 10551922337", function () {
    assert(
      "عشرة بلايين وخمسمائة وواحد وخمسون مليونًا وتسعمائة واثنان وعشرون ألفًا وثلاثمائة وسبعة وثلاثون",
      parse(10551922337)
    );
  });
  it("should read 15394738203", function () {
    assert(
      "خمسة عشر بليونًا وثلاثمائة وأربعة وتسعون مليونًا وسبعمائة وثمانية وثلاثون ألفًا ومائتان وثلاثة",
      parse(15394738203)
    );
  });
  it("should read 20302697531", function () {
    assert(
      "عشرون بليونًا وثلاثمائة ومليونان وستمائة وسبعة وتسعون ألفًا وخمسمائة وواحد وثلاثون",
      parse(20302697531)
    );
  });
  it("should read 20893676694", function () {
    assert(
      "عشرون بليونًا وثمانمائة وثلاثة وتسعون مليونًا وستمائة وستة وسبعون ألفًا وستمائة وأربعة وتسعون",
      parse(20893676694)
    );
  });
  it("should read 19103306204", function () {
    assert(
      "تسعة عشر بليونًا ومائة وثلاثة ملايين وثلاثمائة وستة آلاف ومائتان وأربعة",
      parse(19103306204)
    );
  });
  it("should read 5794018380", function () {
    assert(
      "خمسة بلايين وسبعمائة وأربعة وتسعون مليونًا وثمانية عشر ألفًا وثلاثمائة وثمانون",
      parse(5794018380)
    );
  });
  it("should read 25021162461", function () {
    assert(
      "خمسة وعشرون بليونًا وواحد وعشرون مليونًا ومائة واثنان وستون ألفًا وأربعمائة وواحد وستون",
      parse(25021162461)
    );
  });
  it("should read 6640079139", function () {
    assert(
      "ستة بلايين وستمائة وأربعون مليونًا وتسعة وسبعون ألفًا ومائة وتسعة وثلاثون",
      parse(6640079139)
    );
  });
  it("should read 4817068150", function () {
    assert(
      "أربعة بلايين وثمانمائة وسبعة عشر مليونًا وثمانية وستون ألفًا ومائة وخمسون",
      parse(4817068150)
    );
  });
  it("should read 22800935906", function () {
    assert(
      "اثنان وعشرون بليونًا وثمانمائة مليون وتسعمائة وخمسة وثلاثون ألفًا وتسعمائة وستة",
      parse(22800935906)
    );
  });
  it("should read 23476034327", function () {
    assert(
      "ثلاثة وعشرون بليونًا وأربعمائة وستة وسبعون مليونًا وأربعة وثلاثون ألفًا وثلاثمائة وسبعة وعشرون",
      parse(23476034327)
    );
  });
  it("should read 25551912741", function () {
    assert(
      "خمسة وعشرون بليونًا وخمسمائة وواحد وخمسون مليونًا وتسعمائة وإثنا عشر ألفًا وسبعمائة وواحد وأربعون",
      parse(25551912741)
    );
  });
  it("should read 27045367220", function () {
    assert(
      "سبعة وعشرون بليونًا وخمسة وأربعون مليونًا وثلاثمائة وسبعة وستون ألفًا ومائتان وعشرون",
      parse(27045367220)
    );
  });
  it("should read 28496084157", function () {
    assert(
      "ثمانية وعشرون بليونًا وأربعمائة وستة وتسعون مليونًا وأربعة وثمانون ألفًا ومائة وسبعة وخمسون",
      parse(28496084157)
    );
  });
  it("should read 8272001140", function () {
    assert(
      "ثمانية بلايين ومائتان واثنان وسبعون مليونًا وألف ومائة وأربعون",
      parse(8272001140)
    );
  });
  it("should read 23453149184", function () {
    assert(
      "ثلاثة وعشرون بليونًا وأربعمائة وثلاثة وخمسون مليونًا ومائة وتسعة وأربعون ألفًا ومائة وأربعة وثمانون",
      parse(23453149184)
    );
  });
  it("should read 11618089811", function () {
    assert(
      "أحد عشر بليونًا وستمائة وثمانية عشر مليونًا وتسعة وثمانون ألفًا وثمانمائة وأحد عشر",
      parse(11618089811)
    );
  });
  it("should read 20301592140", function () {
    assert(
      "عشرون بليونًا وثلاثمائة ومليون وخمسمائة واثنان وتسعون ألفًا ومائة وأربعون",
      parse(20301592140)
    );
  });
  it("should read 15524071372", function () {
    assert(
      "خمسة عشر بليونًا وخمسمائة وأربعة وعشرون مليونًا وواحد وسبعون ألفًا وثلاثمائة واثنان وسبعون",
      parse(15524071372)
    );
  });
  it("should read 23197832587", function () {
    assert(
      "ثلاثة وعشرون بليونًا ومائة وسبعة وتسعون مليونًا وثمانمائة واثنان وثلاثون ألفًا وخمسمائة وسبعة وثمانون",
      parse(23197832587)
    );
  });
  it("should read 18862312029", function () {
    assert(
      "ثمانية عشر بليونًا وثمانمائة واثنان وستون مليونًا وثلاثمائة وإثنا عشر ألفًا وتسعة وعشرون",
      parse(18862312029)
    );
  });
  it("should read 28632074856", function () {
    assert(
      "ثمانية وعشرون بليونًا وستمائة واثنان وثلاثون مليونًا وأربعة وسبعون ألفًا وثمانمائة وستة وخمسون",
      parse(28632074856)
    );
  });
  it("should read 6644848326", function () {
    assert(
      "ستة بلايين وستمائة وأربعة وأربعون مليونًا وثمانمائة وثمانية وأربعون ألفًا وثلاثمائة وستة وعشرون",
      parse(6644848326)
    );
  });
  it("should read 28193886548", function () {
    assert(
      "ثمانية وعشرون بليونًا ومائة وثلاثة وتسعون مليونًا وثمانمائة وستة وثمانون ألفًا وخمسمائة وثمانية وأربعون",
      parse(28193886548)
    );
  });
  it("should read 7285401105", function () {
    assert(
      "سبعة بلايين ومائتان وخمسة وثمانون مليونًا وأربعمائة وألف ومائة وخمسة",
      parse(7285401105)
    );
  });
  it("should read 7510072217", function () {
    assert(
      "سبعة بلايين وخمسمائة وعشرة ملايين واثنان وسبعون ألفًا ومائتان وسبعة عشر",
      parse(7510072217)
    );
  });
  it("should read 27609988773", function () {
    assert(
      "سبعة وعشرون بليونًا وستمائة وتسعة ملايين وتسعمائة وثمانية وثمانون ألفًا وسبعمائة وثلاثة وسبعون",
      parse(27609988773)
    );
  });
  it("should read 9587133466", function () {
    assert(
      "تسعة بلايين وخمسمائة وسبعة وثمانون مليونًا ومائة وثلاثة وثلاثون ألفًا وأربعمائة وستة وستون",
      parse(9587133466)
    );
  });
  it("should read 12515944196", function () {
    assert(
      "إثنا عشر بليونًا وخمسمائة وخمسة عشر مليونًا وتسعمائة وأربعة وأربعون ألفًا ومائة وستة وتسعون",
      parse(12515944196)
    );
  });
  it("should read 29294391633", function () {
    assert(
      "تسعة وعشرون بليونًا ومائتان وأربعة وتسعون مليونًا وثلاثمائة وواحد وتسعون ألفًا وستمائة وثلاثة وثلاثون",
      parse(29294391633)
    );
  });
  it("should read 11670190497", function () {
    assert(
      "أحد عشر بليونًا وستمائة وسبعون مليونًا ومائة وتسعون ألفًا وأربعمائة وسبعة وتسعون",
      parse(11670190497)
    );
  });
  it("should read 24052280831", function () {
    assert(
      "أربعة وعشرون بليونًا واثنان وخمسون مليونًا ومائتان وثمانون ألفًا وثمانمائة وواحد وثلاثون",
      parse(24052280831)
    );
  });
  it("should read 8979119262", function () {
    assert(
      "ثمانية بلايين وتسعمائة وتسعة وسبعون مليونًا ومائة وتسعة عشر ألفًا ومائتان واثنان وستون",
      parse(8979119262)
    );
  });
  it("should read 21355143986", function () {
    assert(
      "واحد وعشرون بليونًا وثلاثمائة وخمسة وخمسون مليونًا ومائة وثلاثة وأربعون ألفًا وتسعمائة وستة وثمانون",
      parse(21355143986)
    );
  });
  it("should read 10866274193", function () {
    assert(
      "عشرة بلايين وثمانمائة وستة وستون مليونًا ومائتان وأربعة وسبعون ألفًا ومائة وثلاثة وتسعون",
      parse(10866274193)
    );
  });
  it("should read 26630129373", function () {
    assert(
      "ستة وعشرون بليونًا وستمائة وثلاثون مليونًا ومائة وتسعة وعشرون ألفًا وثلاثمائة وثلاثة وسبعون",
      parse(26630129373)
    );
  });
  it("should read 29341460866", function () {
    assert(
      "تسعة وعشرون بليونًا وثلاثمائة وواحد وأربعون مليونًا وأربعمائة وستون ألفًا وثمانمائة وستة وستون",
      parse(29341460866)
    );
  });
  it("should read 8034861822", function () {
    assert(
      "ثمانية بلايين وأربعة وثلاثون مليونًا وثمانمائة وواحد وستون ألفًا وثمانمائة واثنان وعشرون",
      parse(8034861822)
    );
  });
  it("should read 23970012495", function () {
    assert(
      "ثلاثة وعشرون بليونًا وتسعمائة وسبعون مليونًا وإثنا عشر ألفًا وأربعمائة وخمسة وتسعون",
      parse(23970012495)
    );
  });
  it("should read 16672632206", function () {
    assert(
      "ستة عشر بليونًا وستمائة واثنان وسبعون مليونًا وستمائة واثنان وثلاثون ألفًا ومائتان وستة",
      parse(16672632206)
    );
  });
  it("should read 9294207900", function () {
    assert(
      "تسعة بلايين ومائتان وأربعة وتسعون مليونًا ومائتان وسبعة آلاف وتسعمائة",
      parse(9294207900)
    );
  });
  it("should read 7540209332", function () {
    assert(
      "سبعة بلايين وخمسمائة وأربعون مليونًا ومائتان وتسعة آلاف وثلاثمائة واثنان وثلاثون",
      parse(7540209332)
    );
  });
  it("should read 21498568865", function () {
    assert(
      "واحد وعشرون بليونًا وأربعمائة وثمانية وتسعون مليونًا وخمسمائة وثمانية وستون ألفًا وثمانمائة وخمسة وستون",
      parse(21498568865)
    );
  });
  it("should read 21108448865", function () {
    assert(
      "واحد وعشرون بليونًا ومائة وثمانية ملايين وأربعمائة وثمانية وأربعون ألفًا وثمانمائة وخمسة وستون",
      parse(21108448865)
    );
  });
  it("should read 28520038520", function () {
    assert(
      "ثمانية وعشرون بليونًا وخمسمائة وعشرون مليونًا وثمانية وثلاثون ألفًا وخمسمائة وعشرون",
      parse(28520038520)
    );
  });
  it("should read 17249428039", function () {
    assert(
      "سبعة عشر بليونًا ومائتان وتسعة وأربعون مليونًا وأربعمائة وثمانية وعشرون ألفًا وتسعة وثلاثون",
      parse(17249428039)
    );
  });
  it("should read 7844055796", function () {
    assert(
      "سبعة بلايين وثمانمائة وأربعة وأربعون مليونًا وخمسة وخمسون ألفًا وسبعمائة وستة وتسعون",
      parse(7844055796)
    );
  });
  it("should read 5847089462", function () {
    assert(
      "خمسة بلايين وثمانمائة وسبعة وأربعون مليونًا وتسعة وثمانون ألفًا وأربعمائة واثنان وستون",
      parse(5847089462)
    );
  });
  it("should read 27044296589", function () {
    assert(
      "سبعة وعشرون بليونًا وأربعة وأربعون مليونًا ومائتان وستة وتسعون ألفًا وخمسمائة وتسعة وثمانون",
      parse(27044296589)
    );
  });
  it("should read 13492060230", function () {
    assert(
      "ثلاثة عشر بليونًا وأربعمائة واثنان وتسعون مليونًا وستون ألفًا ومائتان وثلاثون",
      parse(13492060230)
    );
  });
  it("should read 9389282270", function () {
    assert(
      "تسعة بلايين وثلاثمائة وتسعة وثمانون مليونًا ومائتان واثنان وثمانون ألفًا ومائتان وسبعون",
      parse(9389282270)
    );
  });
  it("should read 27337966672", function () {
    assert(
      "سبعة وعشرون بليونًا وثلاثمائة وسبعة وثلاثون مليونًا وتسعمائة وستة وستون ألفًا وستمائة واثنان وسبعون",
      parse(27337966672)
    );
  });
  it("should read 10732671862", function () {
    assert(
      "عشرة بلايين وسبعمائة واثنان وثلاثون مليونًا وستمائة وواحد وسبعون ألفًا وثمانمائة واثنان وستون",
      parse(10732671862)
    );
  });
  it("should read 4901001851", function () {
    assert(
      "أربعة بلايين وتسعمائة ومليون وألف وثمانمائة وواحد وخمسون",
      parse(4901001851)
    );
  });
  it("should read 17468099864", function () {
    assert(
      "سبعة عشر بليونًا وأربعمائة وثمانية وستون مليونًا وتسعة وتسعون ألفًا وثمانمائة وأربعة وستون",
      parse(17468099864)
    );
  });
  it("should read 23325785360", function () {
    assert(
      "ثلاثة وعشرون بليونًا وثلاثمائة وخمسة وعشرون مليونًا وسبعمائة وخمسة وثمانون ألفًا وثلاثمائة وستون",
      parse(23325785360)
    );
  });
  it("should read 9394711902", function () {
    assert(
      "تسعة بلايين وثلاثمائة وأربعة وتسعون مليونًا وسبعمائة وأحد عشر ألفًا وتسعمائة واثنان",
      parse(9394711902)
    );
  });
  it("should read 24534811202", function () {
    assert(
      "أربعة وعشرون بليونًا وخمسمائة وأربعة وثلاثون مليونًا وثمانمائة وأحد عشر ألفًا ومائتان واثنان",
      parse(24534811202)
    );
  });
  it("should read 23749548484", function () {
    assert(
      "ثلاثة وعشرون بليونًا وسبعمائة وتسعة وأربعون مليونًا وخمسمائة وثمانية وأربعون ألفًا وأربعمائة وأربعة وثمانون",
      parse(23749548484)
    );
  });
  it("should read 26290753925", function () {
    assert(
      "ستة وعشرون بليونًا ومائتان وتسعون مليونًا وسبعمائة وثلاثة وخمسون ألفًا وتسعمائة وخمسة وعشرون",
      parse(26290753925)
    );
  });
  it("should read 20912695293", function () {
    assert(
      "عشرون بليونًا وتسعمائة وإثنا عشر مليونًا وستمائة وخمسة وتسعون ألفًا ومائتان وثلاثة وتسعون",
      parse(20912695293)
    );
  });
  it("should read 8521528039", function () {
    assert(
      "ثمانية بلايين وخمسمائة وواحد وعشرون مليونًا وخمسمائة وثمانية وعشرون ألفًا وتسعة وثلاثون",
      parse(8521528039)
    );
  });
  it("should read 22802800150", function () {
    assert(
      "اثنان وعشرون بليونًا وثمانمائة ومليونان وثمانمائة ألف ومائة وخمسون",
      parse(22802800150)
    );
  });
  it("should read 27169043785", function () {
    assert(
      "سبعة وعشرون بليونًا ومائة وتسعة وستون مليونًا وثلاثة وأربعون ألفًا وسبعمائة وخمسة وثمانون",
      parse(27169043785)
    );
  });
  it("should read 10229223791", function () {
    assert(
      "عشرة بلايين ومائتان وتسعة وعشرون مليونًا ومائتان وثلاثة وعشرون ألفًا وسبعمائة وواحد وتسعون",
      parse(10229223791)
    );
  });
  it("should read 15448136470", function () {
    assert(
      "خمسة عشر بليونًا وأربعمائة وثمانية وأربعون مليونًا ومائة وستة وثلاثون ألفًا وأربعمائة وسبعون",
      parse(15448136470)
    );
  });
  it("should read 12263233330", function () {
    assert(
      "إثنا عشر بليونًا ومائتان وثلاثة وستون مليونًا ومائتان وثلاثة وثلاثون ألفًا وثلاثمائة وثلاثون",
      parse(12263233330)
    );
  });
  it("should read 12912656162", function () {
    assert(
      "إثنا عشر بليونًا وتسعمائة وإثنا عشر مليونًا وستمائة وستة وخمسون ألفًا ومائة واثنان وستون",
      parse(12912656162)
    );
  });
  it("should read 29844917037", function () {
    assert(
      "تسعة وعشرون بليونًا وثمانمائة وأربعة وأربعون مليونًا وتسعمائة وسبعة عشر ألفًا وسبعة وثلاثون",
      parse(29844917037)
    );
  });
  it("should read 5277731828", function () {
    assert(
      "خمسة بلايين ومائتان وسبعة وسبعون مليونًا وسبعمائة وواحد وثلاثون ألفًا وثمانمائة وثمانية وعشرون",
      parse(5277731828)
    );
  });
  it("should read 22624632997", function () {
    assert(
      "اثنان وعشرون بليونًا وستمائة وأربعة وعشرون مليونًا وستمائة واثنان وثلاثون ألفًا وتسعمائة وسبعة وتسعون",
      parse(22624632997)
    );
  });
  it("should read 26454723687", function () {
    assert(
      "ستة وعشرون بليونًا وأربعمائة وأربعة وخمسون مليونًا وسبعمائة وثلاثة وعشرون ألفًا وستمائة وسبعة وثمانون",
      parse(26454723687)
    );
  });
  it("should read 18175873418", function () {
    assert(
      "ثمانية عشر بليونًا ومائة وخمسة وسبعون مليونًا وثمانمائة وثلاثة وسبعون ألفًا وأربعمائة وثمانية عشر",
      parse(18175873418)
    );
  });
  it("should read 17153902345", function () {
    assert(
      "سبعة عشر بليونًا ومائة وثلاثة وخمسون مليونًا وتسعمائة وألفان وثلاثمائة وخمسة وأربعون",
      parse(17153902345)
    );
  });
  it("should read 18245789094", function () {
    assert(
      "ثمانية عشر بليونًا ومائتان وخمسة وأربعون مليونًا وسبعمائة وتسعة وثمانون ألفًا وأربعة وتسعون",
      parse(18245789094)
    );
  });
  it("should read 12790193199", function () {
    assert(
      "إثنا عشر بليونًا وسبعمائة وتسعون مليونًا ومائة وثلاثة وتسعون ألفًا ومائة وتسعة وتسعون",
      parse(12790193199)
    );
  });
  it("should read 9445976570", function () {
    assert(
      "تسعة بلايين وأربعمائة وخمسة وأربعون مليونًا وتسعمائة وستة وسبعون ألفًا وخمسمائة وسبعون",
      parse(9445976570)
    );
  });
  it("should read 12833995171", function () {
    assert(
      "إثنا عشر بليونًا وثمانمائة وثلاثة وثلاثون مليونًا وتسعمائة وخمسة وتسعون ألفًا ومائة وواحد وسبعون",
      parse(12833995171)
    );
  });
  it("should read 4847106351", function () {
    assert(
      "أربعة بلايين وثمانمائة وسبعة وأربعون مليونًا ومائة وستة آلاف وثلاثمائة وواحد وخمسون",
      parse(4847106351)
    );
  });
  it("should read 28296631488", function () {
    assert(
      "ثمانية وعشرون بليونًا ومائتان وستة وتسعون مليونًا وستمائة وواحد وثلاثون ألفًا وأربعمائة وثمانية وثمانون",
      parse(28296631488)
    );
  });
  it("should read 8703784424", function () {
    assert(
      "ثمانية بلايين وسبعمائة وثلاثة ملايين وسبعمائة وأربعة وثمانون ألفًا وأربعمائة وأربعة وعشرون",
      parse(8703784424)
    );
  });
  it("should read 11255985600", function () {
    assert(
      "أحد عشر بليونًا ومائتان وخمسة وخمسون مليونًا وتسعمائة وخمسة وثمانون ألفًا وستمائة",
      parse(11255985600)
    );
  });
  it("should read 15325997815", function () {
    assert(
      "خمسة عشر بليونًا وثلاثمائة وخمسة وعشرون مليونًا وتسعمائة وسبعة وتسعون ألفًا وثمانمائة وخمسة عشر",
      parse(15325997815)
    );
  });
  it("should read 13359234846", function () {
    assert(
      "ثلاثة عشر بليونًا وثلاثمائة وتسعة وخمسون مليونًا ومائتان وأربعة وثلاثون ألفًا وثمانمائة وستة وأربعون",
      parse(13359234846)
    );
  });
  it("should read 28970025983", function () {
    assert(
      "ثمانية وعشرون بليونًا وتسعمائة وسبعون مليونًا وخمسة وعشرون ألفًا وتسعمائة وثلاثة وثمانون",
      parse(28970025983)
    );
  });
  it("should read 7335293222", function () {
    assert(
      "سبعة بلايين وثلاثمائة وخمسة وثلاثون مليونًا ومائتان وثلاثة وتسعون ألفًا ومائتان واثنان وعشرون",
      parse(7335293222)
    );
  });
  it("should read 14676919369", function () {
    assert(
      "أربعة عشر بليونًا وستمائة وستة وسبعون مليونًا وتسعمائة وتسعة عشر ألفًا وثلاثمائة وتسعة وستون",
      parse(14676919369)
    );
  });
  it("should read 27460618624", function () {
    assert(
      "سبعة وعشرون بليونًا وأربعمائة وستون مليونًا وستمائة وثمانية عشر ألفًا وستمائة وأربعة وعشرون",
      parse(27460618624)
    );
  });
  it("should read 20326717135", function () {
    assert(
      "عشرون بليونًا وثلاثمائة وستة وعشرون مليونًا وسبعمائة وسبعة عشر ألفًا ومائة وخمسة وثلاثون",
      parse(20326717135)
    );
  });
  it("should read 11912580634", function () {
    assert(
      "أحد عشر بليونًا وتسعمائة وإثنا عشر مليونًا وخمسمائة وثمانون ألفًا وستمائة وأربعة وثلاثون",
      parse(11912580634)
    );
  });
  it("should read 12842629496", function () {
    assert(
      "إثنا عشر بليونًا وثمانمائة واثنان وأربعون مليونًا وستمائة وتسعة وعشرون ألفًا وأربعمائة وستة وتسعون",
      parse(12842629496)
    );
  });
  it("should read 20059967551", function () {
    assert(
      "عشرون بليونًا وتسعة وخمسون مليونًا وتسعمائة وسبعة وستون ألفًا وخمسمائة وواحد وخمسون",
      parse(20059967551)
    );
  });
  it("should read 5435574347", function () {
    assert(
      "خمسة بلايين وأربعمائة وخمسة وثلاثون مليونًا وخمسمائة وأربعة وسبعون ألفًا وثلاثمائة وسبعة وأربعون",
      parse(5435574347)
    );
  });
  it("should read 12608609575", function () {
    assert(
      "إثنا عشر بليونًا وستمائة وثمانية ملايين وستمائة وتسعة آلاف وخمسمائة وخمسة وسبعون",
      parse(12608609575)
    );
  });
  it("should read 20002587223", function () {
    assert(
      "عشرون بليونًا ومليونان وخمسمائة وسبعة وثمانون ألفًا ومائتان وثلاثة وعشرون",
      parse(20002587223)
    );
  });
  it("should read 8109695988", function () {
    assert(
      "ثمانية بلايين ومائة وتسعة ملايين وستمائة وخمسة وتسعون ألفًا وتسعمائة وثمانية وثمانون",
      parse(8109695988)
    );
  });
  it("should read 22066115735", function () {
    assert(
      "اثنان وعشرون بليونًا وستة وستون مليونًا ومائة وخمسة عشر ألفًا وسبعمائة وخمسة وثلاثون",
      parse(22066115735)
    );
  });
  it("should read 17958616108", function () {
    assert(
      "سبعة عشر بليونًا وتسعمائة وثمانية وخمسون مليونًا وستمائة وستة عشر ألفًا ومائة وثمانية",
      parse(17958616108)
    );
  });
  it("should read 6662226346", function () {
    assert(
      "ستة بلايين وستمائة واثنان وستون مليونًا ومائتان وستة وعشرون ألفًا وثلاثمائة وستة وأربعون",
      parse(6662226346)
    );
  });
  it("should read 28213631472", function () {
    assert(
      "ثمانية وعشرون بليونًا ومائتان وثلاثة عشر مليونًا وستمائة وواحد وثلاثون ألفًا وأربعمائة واثنان وسبعون",
      parse(28213631472)
    );
  });
  it("should read 9906254233", function () {
    assert(
      "تسعة بلايين وتسعمائة وستة ملايين ومائتان وأربعة وخمسون ألفًا ومائتان وثلاثة وثلاثون",
      parse(9906254233)
    );
  });
  it("should read 12528740093", function () {
    assert(
      "إثنا عشر بليونًا وخمسمائة وثمانية وعشرون مليونًا وسبعمائة وأربعون ألفًا وثلاثة وتسعون",
      parse(12528740093)
    );
  });
  it("should read 7616026401", function () {
    assert(
      "سبعة بلايين وستمائة وستة عشر مليونًا وستة وعشرون ألفًا وأربعمائة وواحد",
      parse(7616026401)
    );
  });
  it("should read 21032536404", function () {
    assert(
      "واحد وعشرون بليونًا واثنان وثلاثون مليونًا وخمسمائة وستة وثلاثون ألفًا وأربعمائة وأربعة",
      parse(21032536404)
    );
  });
  it("should read 22355833556", function () {
    assert(
      "اثنان وعشرون بليونًا وثلاثمائة وخمسة وخمسون مليونًا وثمانمائة وثلاثة وثلاثون ألفًا وخمسمائة وستة وخمسون",
      parse(22355833556)
    );
  });
  it("should read 21627236175", function () {
    assert(
      "واحد وعشرون بليونًا وستمائة وسبعة وعشرون مليونًا ومائتان وستة وثلاثون ألفًا ومائة وخمسة وسبعون",
      parse(21627236175)
    );
  });
  it("should read 29027065458", function () {
    assert(
      "تسعة وعشرون بليونًا وسبعة وعشرون مليونًا وخمسة وستون ألفًا وأربعمائة وثمانية وخمسون",
      parse(29027065458)
    );
  });
  it("should read 11636509940", function () {
    assert(
      "أحد عشر بليونًا وستمائة وستة وثلاثون مليونًا وخمسمائة وتسعة آلاف وتسعمائة وأربعون",
      parse(11636509940)
    );
  });
  it("should read 21875513863", function () {
    assert(
      "واحد وعشرون بليونًا وثمانمائة وخمسة وسبعون مليونًا وخمسمائة وثلاثة عشر ألفًا وثمانمائة وثلاثة وستون",
      parse(21875513863)
    );
  });
  it("should read 12516494531", function () {
    assert(
      "إثنا عشر بليونًا وخمسمائة وستة عشر مليونًا وأربعمائة وأربعة وتسعون ألفًا وخمسمائة وواحد وثلاثون",
      parse(12516494531)
    );
  });
  it("should read 15044222236", function () {
    assert(
      "خمسة عشر بليونًا وأربعة وأربعون مليونًا ومائتان واثنان وعشرون ألفًا ومائتان وستة وثلاثون",
      parse(15044222236)
    );
  });
  it("should read 28797509317", function () {
    assert(
      "ثمانية وعشرون بليونًا وسبعمائة وسبعة وتسعون مليونًا وخمسمائة وتسعة آلاف وثلاثمائة وسبعة عشر",
      parse(28797509317)
    );
  });
  it("should read 20007884024", function () {
    assert(
      "عشرون بليونًا وسبعة ملايين وثمانمائة وأربعة وثمانون ألفًا وأربعة وعشرون",
      parse(20007884024)
    );
  });
  it("should read 5519887270", function () {
    assert(
      "خمسة بلايين وخمسمائة وتسعة عشر مليونًا وثمانمائة وسبعة وثمانون ألفًا ومائتان وسبعون",
      parse(5519887270)
    );
  });
  it("should read 21393600864", function () {
    assert(
      "واحد وعشرون بليونًا وثلاثمائة وثلاثة وتسعون مليونًا وستمائة ألف وثمانمائة وأربعة وستون",
      parse(21393600864)
    );
  });
  it("should read 26243002361", function () {
    assert(
      "ستة وعشرون بليونًا ومائتان وثلاثة وأربعون مليونًا وألفان وثلاثمائة وواحد وستون",
      parse(26243002361)
    );
  });
  it("should read 4648558426", function () {
    assert(
      "أربعة بلايين وستمائة وثمانية وأربعون مليونًا وخمسمائة وثمانية وخمسون ألفًا وأربعمائة وستة وعشرون",
      parse(4648558426)
    );
  });
  it("should read 27137886153", function () {
    assert(
      "سبعة وعشرون بليونًا ومائة وسبعة وثلاثون مليونًا وثمانمائة وستة وثمانون ألفًا ومائة وثلاثة وخمسون",
      parse(27137886153)
    );
  });
  it("should read 12338939311", function () {
    assert(
      "إثنا عشر بليونًا وثلاثمائة وثمانية وثلاثون مليونًا وتسعمائة وتسعة وثلاثون ألفًا وثلاثمائة وأحد عشر",
      parse(12338939311)
    );
  });
  it("should read 5767337996", function () {
    assert(
      "خمسة بلايين وسبعمائة وسبعة وستون مليونًا وثلاثمائة وسبعة وثلاثون ألفًا وتسعمائة وستة وتسعون",
      parse(5767337996)
    );
  });
  it("should read 26414729177", function () {
    assert(
      "ستة وعشرون بليونًا وأربعمائة وأربعة عشر مليونًا وسبعمائة وتسعة وعشرون ألفًا ومائة وسبعة وسبعون",
      parse(26414729177)
    );
  });
  it("should read 17305209286", function () {
    assert(
      "سبعة عشر بليونًا وثلاثمائة وخمسة ملايين ومائتان وتسعة آلاف ومائتان وستة وثمانون",
      parse(17305209286)
    );
  });
  it("should read 17536757264", function () {
    assert(
      "سبعة عشر بليونًا وخمسمائة وستة وثلاثون مليونًا وسبعمائة وسبعة وخمسون ألفًا ومائتان وأربعة وستون",
      parse(17536757264)
    );
  });
  it("should read 15534833725", function () {
    assert(
      "خمسة عشر بليونًا وخمسمائة وأربعة وثلاثون مليونًا وثمانمائة وثلاثة وثلاثون ألفًا وسبعمائة وخمسة وعشرون",
      parse(15534833725)
    );
  });
  it("should read 27310934573", function () {
    assert(
      "سبعة وعشرون بليونًا وثلاثمائة وعشرة ملايين وتسعمائة وأربعة وثلاثون ألفًا وخمسمائة وثلاثة وسبعون",
      parse(27310934573)
    );
  });
  it("should read 7269344921", function () {
    assert(
      "سبعة بلايين ومائتان وتسعة وستون مليونًا وثلاثمائة وأربعة وأربعون ألفًا وتسعمائة وواحد وعشرون",
      parse(7269344921)
    );
  });
  it("should read 15631539204", function () {
    assert(
      "خمسة عشر بليونًا وستمائة وواحد وثلاثون مليونًا وخمسمائة وتسعة وثلاثون ألفًا ومائتان وأربعة",
      parse(15631539204)
    );
  });
  it("should read 7098463904", function () {
    assert(
      "سبعة بلايين وثمانية وتسعون مليونًا وأربعمائة وثلاثة وستون ألفًا وتسعمائة وأربعة",
      parse(7098463904)
    );
  });
  it("should read 23215646762", function () {
    assert(
      "ثلاثة وعشرون بليونًا ومائتان وخمسة عشر مليونًا وستمائة وستة وأربعون ألفًا وسبعمائة واثنان وستون",
      parse(23215646762)
    );
  });
  it("should read 14594856164", function () {
    assert(
      "أربعة عشر بليونًا وخمسمائة وأربعة وتسعون مليونًا وثمانمائة وستة وخمسون ألفًا ومائة وأربعة وستون",
      parse(14594856164)
    );
  });
  it("should read 23308316123", function () {
    assert(
      "ثلاثة وعشرون بليونًا وثلاثمائة وثمانية ملايين وثلاثمائة وستة عشر ألفًا ومائة وثلاثة وعشرون",
      parse(23308316123)
    );
  });
  it("should read 7407221888", function () {
    assert(
      "سبعة بلايين وأربعمائة وسبعة ملايين ومائتان وواحد وعشرون ألفًا وثمانمائة وثمانية وثمانون",
      parse(7407221888)
    );
  });
  it("should read 9233156040", function () {
    assert(
      "تسعة بلايين ومائتان وثلاثة وثلاثون مليونًا ومائة وستة وخمسون ألفًا وأربعون",
      parse(9233156040)
    );
  });
  it("should read 24102117685", function () {
    assert(
      "أربعة وعشرون بليونًا ومائة ومليونان ومائة وسبعة عشر ألفًا وستمائة وخمسة وثمانون",
      parse(24102117685)
    );
  });
  it("should read 26284392381", function () {
    assert(
      "ستة وعشرون بليونًا ومائتان وأربعة وثمانون مليونًا وثلاثمائة واثنان وتسعون ألفًا وثلاثمائة وواحد وثمانون",
      parse(26284392381)
    );
  });
  it("should read 7740384977", function () {
    assert(
      "سبعة بلايين وسبعمائة وأربعون مليونًا وثلاثمائة وأربعة وثمانون ألفًا وتسعمائة وسبعة وسبعون",
      parse(7740384977)
    );
  });
  it("should read 10591631441", function () {
    assert(
      "عشرة بلايين وخمسمائة وواحد وتسعون مليونًا وستمائة وواحد وثلاثون ألفًا وأربعمائة وواحد وأربعون",
      parse(10591631441)
    );
  });
  it("should read 9426169825", function () {
    assert(
      "تسعة بلايين وأربعمائة وستة وعشرون مليونًا ومائة وتسعة وستون ألفًا وثمانمائة وخمسة وعشرون",
      parse(9426169825)
    );
  });
  it("should read 29859833106", function () {
    assert(
      "تسعة وعشرون بليونًا وثمانمائة وتسعة وخمسون مليونًا وثمانمائة وثلاثة وثلاثون ألفًا ومائة وستة",
      parse(29859833106)
    );
  });
  it("should read 5502931163", function () {
    assert(
      "خمسة بلايين وخمسمائة ومليونان وتسعمائة وواحد وثلاثون ألفًا ومائة وثلاثة وستون",
      parse(5502931163)
    );
  });
  it("should read 26179778816", function () {
    assert(
      "ستة وعشرون بليونًا ومائة وتسعة وسبعون مليونًا وسبعمائة وثمانية وسبعون ألفًا وثمانمائة وستة عشر",
      parse(26179778816)
    );
  });
  it("should read 17241855470", function () {
    assert(
      "سبعة عشر بليونًا ومائتان وواحد وأربعون مليونًا وثمانمائة وخمسة وخمسون ألفًا وأربعمائة وسبعون",
      parse(17241855470)
    );
  });
  it("should read 22563634117", function () {
    assert(
      "اثنان وعشرون بليونًا وخمسمائة وثلاثة وستون مليونًا وستمائة وأربعة وثلاثون ألفًا ومائة وسبعة عشر",
      parse(22563634117)
    );
  });
  it("should read 20178533210", function () {
    assert(
      "عشرون بليونًا ومائة وثمانية وسبعون مليونًا وخمسمائة وثلاثة وثلاثون ألفًا ومائتان وعشرة",
      parse(20178533210)
    );
  });
  it("should read 14667377141", function () {
    assert(
      "أربعة عشر بليونًا وستمائة وسبعة وستون مليونًا وثلاثمائة وسبعة وسبعون ألفًا ومائة وواحد وأربعون",
      parse(14667377141)
    );
  });
  it("should read 25864340873", function () {
    assert(
      "خمسة وعشرون بليونًا وثمانمائة وأربعة وستون مليونًا وثلاثمائة وأربعون ألفًا وثمانمائة وثلاثة وسبعون",
      parse(25864340873)
    );
  });
  it("should read 5825762994", function () {
    assert(
      "خمسة بلايين وثمانمائة وخمسة وعشرون مليونًا وسبعمائة واثنان وستون ألفًا وتسعمائة وأربعة وتسعون",
      parse(5825762994)
    );
  });
  it("should read 19310235239", function () {
    assert(
      "تسعة عشر بليونًا وثلاثمائة وعشرة ملايين ومائتان وخمسة وثلاثون ألفًا ومائتان وتسعة وثلاثون",
      parse(19310235239)
    );
  });
  it("should read 19083055458", function () {
    assert(
      "تسعة عشر بليونًا وثلاثة وثمانون مليونًا وخمسة وخمسون ألفًا وأربعمائة وثمانية وخمسون",
      parse(19083055458)
    );
  });
  it("should read 9430565272", function () {
    assert(
      "تسعة بلايين وأربعمائة وثلاثون مليونًا وخمسمائة وخمسة وستون ألفًا ومائتان واثنان وسبعون",
      parse(9430565272)
    );
  });
  it("should read 7316664357", function () {
    assert(
      "سبعة بلايين وثلاثمائة وستة عشر مليونًا وستمائة وأربعة وستون ألفًا وثلاثمائة وسبعة وخمسون",
      parse(7316664357)
    );
  });
  it("should read 17849691022", function () {
    assert(
      "سبعة عشر بليونًا وثمانمائة وتسعة وأربعون مليونًا وستمائة وواحد وتسعون ألفًا واثنان وعشرون",
      parse(17849691022)
    );
  });
  it("should read 10990965618", function () {
    assert(
      "عشرة بلايين وتسعمائة وتسعون مليونًا وتسعمائة وخمسة وستون ألفًا وستمائة وثمانية عشر",
      parse(10990965618)
    );
  });
  it("should read 6242050336", function () {
    assert(
      "ستة بلايين ومائتان واثنان وأربعون مليونًا وخمسون ألفًا وثلاثمائة وستة وثلاثون",
      parse(6242050336)
    );
  });
  it("should read 21203683734", function () {
    assert(
      "واحد وعشرون بليونًا ومائتان وثلاثة ملايين وستمائة وثلاثة وثمانون ألفًا وسبعمائة وأربعة وثلاثون",
      parse(21203683734)
    );
  });
  it("should read 4878020866", function () {
    assert(
      "أربعة بلايين وثمانمائة وثمانية وسبعون مليونًا وعشرون ألفًا وثمانمائة وستة وستون",
      parse(4878020866)
    );
  });
  it("should read 27705156616", function () {
    assert(
      "سبعة وعشرون بليونًا وسبعمائة وخمسة ملايين ومائة وستة وخمسون ألفًا وستمائة وستة عشر",
      parse(27705156616)
    );
  });
  it("should read 10635725734", function () {
    assert(
      "عشرة بلايين وستمائة وخمسة وثلاثون مليونًا وسبعمائة وخمسة وعشرون ألفًا وسبعمائة وأربعة وثلاثون",
      parse(10635725734)
    );
  });
  it("should read 6157269392", function () {
    assert(
      "ستة بلايين ومائة وسبعة وخمسون مليونًا ومائتان وتسعة وستون ألفًا وثلاثمائة واثنان وتسعون",
      parse(6157269392)
    );
  });
  it("should read 17542340122", function () {
    assert(
      "سبعة عشر بليونًا وخمسمائة واثنان وأربعون مليونًا وثلاثمائة وأربعون ألفًا ومائة واثنان وعشرون",
      parse(17542340122)
    );
  });
  it("should read 26714235852", function () {
    assert(
      "ستة وعشرون بليونًا وسبعمائة وأربعة عشر مليونًا ومائتان وخمسة وثلاثون ألفًا وثمانمائة واثنان وخمسون",
      parse(26714235852)
    );
  });
  it("should read 26493322559", function () {
    assert(
      "ستة وعشرون بليونًا وأربعمائة وثلاثة وتسعون مليونًا وثلاثمائة واثنان وعشرون ألفًا وخمسمائة وتسعة وخمسون",
      parse(26493322559)
    );
  });
  it("should read 6005829594", function () {
    assert(
      "ستة بلايين وخمسة ملايين وثمانمائة وتسعة وعشرون ألفًا وخمسمائة وأربعة وتسعون",
      parse(6005829594)
    );
  });
  it("should read 12707866754", function () {
    assert(
      "إثنا عشر بليونًا وسبعمائة وسبعة ملايين وثمانمائة وستة وستون ألفًا وسبعمائة وأربعة وخمسون",
      parse(12707866754)
    );
  });
  it("should read 18978977801", function () {
    assert(
      "ثمانية عشر بليونًا وتسعمائة وثمانية وسبعون مليونًا وتسعمائة وسبعة وسبعون ألفًا وثمانمائة وواحد",
      parse(18978977801)
    );
  });
  it("should read 17965794217", function () {
    assert(
      "سبعة عشر بليونًا وتسعمائة وخمسة وستون مليونًا وسبعمائة وأربعة وتسعون ألفًا ومائتان وسبعة عشر",
      parse(17965794217)
    );
  });
  it("should read 17682432603", function () {
    assert(
      "سبعة عشر بليونًا وستمائة واثنان وثمانون مليونًا وأربعمائة واثنان وثلاثون ألفًا وستمائة وثلاثة",
      parse(17682432603)
    );
  });
  it("should read 25796519512", function () {
    assert(
      "خمسة وعشرون بليونًا وسبعمائة وستة وتسعون مليونًا وخمسمائة وتسعة عشر ألفًا وخمسمائة وإثنا عشر",
      parse(25796519512)
    );
  });
  it("should read 9533314514", function () {
    assert(
      "تسعة بلايين وخمسمائة وثلاثة وثلاثون مليونًا وثلاثمائة وأربعة عشر ألفًا وخمسمائة وأربعة عشر",
      parse(9533314514)
    );
  });
  it("should read 12708594982", function () {
    assert(
      "إثنا عشر بليونًا وسبعمائة وثمانية ملايين وخمسمائة وأربعة وتسعون ألفًا وتسعمائة واثنان وثمانون",
      parse(12708594982)
    );
  });
  it("should read 5923186182", function () {
    assert(
      "خمسة بلايين وتسعمائة وثلاثة وعشرون مليونًا ومائة وستة وثمانون ألفًا ومائة واثنان وثمانون",
      parse(5923186182)
    );
  });
  it("should read 4909974232", function () {
    assert(
      "أربعة بلايين وتسعمائة وتسعة ملايين وتسعمائة وأربعة وسبعون ألفًا ومائتان واثنان وثلاثون",
      parse(4909974232)
    );
  });
  it("should read 8560817816", function () {
    assert(
      "ثمانية بلايين وخمسمائة وستون مليونًا وثمانمائة وسبعة عشر ألفًا وثمانمائة وستة عشر",
      parse(8560817816)
    );
  });
  it("should read 29444738911", function () {
    assert(
      "تسعة وعشرون بليونًا وأربعمائة وأربعة وأربعون مليونًا وسبعمائة وثمانية وثلاثون ألفًا وتسعمائة وأحد عشر",
      parse(29444738911)
    );
  });
  it("should read 17975700742", function () {
    assert(
      "سبعة عشر بليونًا وتسعمائة وخمسة وسبعون مليونًا وسبعمائة ألف وسبعمائة واثنان وأربعون",
      parse(17975700742)
    );
  });
  it("should read 12985156378", function () {
    assert(
      "إثنا عشر بليونًا وتسعمائة وخمسة وثمانون مليونًا ومائة وستة وخمسون ألفًا وثلاثمائة وثمانية وسبعون",
      parse(12985156378)
    );
  });
  it("should read 11146377320", function () {
    assert(
      "أحد عشر بليونًا ومائة وستة وأربعون مليونًا وثلاثمائة وسبعة وسبعون ألفًا وثلاثمائة وعشرون",
      parse(11146377320)
    );
  });
  it("should read 26713995289", function () {
    assert(
      "ستة وعشرون بليونًا وسبعمائة وثلاثة عشر مليونًا وتسعمائة وخمسة وتسعون ألفًا ومائتان وتسعة وثمانون",
      parse(26713995289)
    );
  });
  it("should read 18880237183", function () {
    assert(
      "ثمانية عشر بليونًا وثمانمائة وثمانون مليونًا ومائتان وسبعة وثلاثون ألفًا ومائة وثلاثة وثمانون",
      parse(18880237183)
    );
  });
  it("should read 17214641517", function () {
    assert(
      "سبعة عشر بليونًا ومائتان وأربعة عشر مليونًا وستمائة وواحد وأربعون ألفًا وخمسمائة وسبعة عشر",
      parse(17214641517)
    );
  });
  it("should read 4623259016", function () {
    assert(
      "أربعة بلايين وستمائة وثلاثة وعشرون مليونًا ومائتان وتسعة وخمسون ألفًا وستة عشر",
      parse(4623259016)
    );
  });
  it("should read 23217239920", function () {
    assert(
      "ثلاثة وعشرون بليونًا ومائتان وسبعة عشر مليونًا ومائتان وتسعة وثلاثون ألفًا وتسعمائة وعشرون",
      parse(23217239920)
    );
  });
  it("should read 16691187021", function () {
    assert(
      "ستة عشر بليونًا وستمائة وواحد وتسعون مليونًا ومائة وسبعة وثمانون ألفًا وواحد وعشرون",
      parse(16691187021)
    );
  });
  it("should read 29701747462", function () {
    assert(
      "تسعة وعشرون بليونًا وسبعمائة ومليون وسبعمائة وسبعة وأربعون ألفًا وأربعمائة واثنان وستون",
      parse(29701747462)
    );
  });
  it("should read 27051542129", function () {
    assert(
      "سبعة وعشرون بليونًا وواحد وخمسون مليونًا وخمسمائة واثنان وأربعون ألفًا ومائة وتسعة وعشرون",
      parse(27051542129)
    );
  });
  it("should read 16234257480", function () {
    assert(
      "ستة عشر بليونًا ومائتان وأربعة وثلاثون مليونًا ومائتان وسبعة وخمسون ألفًا وأربعمائة وثمانون",
      parse(16234257480)
    );
  });
  it("should read 10136729724", function () {
    assert(
      "عشرة بلايين ومائة وستة وثلاثون مليونًا وسبعمائة وتسعة وعشرون ألفًا وسبعمائة وأربعة وعشرون",
      parse(10136729724)
    );
  });
  it("should read 16733072383", function () {
    assert(
      "ستة عشر بليونًا وسبعمائة وثلاثة وثلاثون مليونًا واثنان وسبعون ألفًا وثلاثمائة وثلاثة وثمانون",
      parse(16733072383)
    );
  });
  it("should read 21636672797", function () {
    assert(
      "واحد وعشرون بليونًا وستمائة وستة وثلاثون مليونًا وستمائة واثنان وسبعون ألفًا وسبعمائة وسبعة وتسعون",
      parse(21636672797)
    );
  });
  it("should read 27935463247", function () {
    assert(
      "سبعة وعشرون بليونًا وتسعمائة وخمسة وثلاثون مليونًا وأربعمائة وثلاثة وستون ألفًا ومائتان وسبعة وأربعون",
      parse(27935463247)
    );
  });
  it("should read 7756883814", function () {
    assert(
      "سبعة بلايين وسبعمائة وستة وخمسون مليونًا وثمانمائة وثلاثة وثمانون ألفًا وثمانمائة وأربعة عشر",
      parse(7756883814)
    );
  });
  it("should read 18734282399", function () {
    assert(
      "ثمانية عشر بليونًا وسبعمائة وأربعة وثلاثون مليونًا ومائتان واثنان وثمانون ألفًا وثلاثمائة وتسعة وتسعون",
      parse(18734282399)
    );
  });
  it("should read 17477050229", function () {
    assert(
      "سبعة عشر بليونًا وأربعمائة وسبعة وسبعون مليونًا وخمسون ألفًا ومائتان وتسعة وعشرون",
      parse(17477050229)
    );
  });
  it("should read 7046851544", function () {
    assert(
      "سبعة بلايين وستة وأربعون مليونًا وثمانمائة وواحد وخمسون ألفًا وخمسمائة وأربعة وأربعون",
      parse(7046851544)
    );
  });
  it("should read 22437677418", function () {
    assert(
      "اثنان وعشرون بليونًا وأربعمائة وسبعة وثلاثون مليونًا وستمائة وسبعة وسبعون ألفًا وأربعمائة وثمانية عشر",
      parse(22437677418)
    );
  });
  it("should read 16912640022", function () {
    assert(
      "ستة عشر بليونًا وتسعمائة وإثنا عشر مليونًا وستمائة وأربعون ألفًا واثنان وعشرون",
      parse(16912640022)
    );
  });
  it("should read 13486480232", function () {
    assert(
      "ثلاثة عشر بليونًا وأربعمائة وستة وثمانون مليونًا وأربعمائة وثمانون ألفًا ومائتان واثنان وثلاثون",
      parse(13486480232)
    );
  });
  it("should read 7224060450", function () {
    assert(
      "سبعة بلايين ومائتان وأربعة وعشرون مليونًا وستون ألفًا وأربعمائة وخمسون",
      parse(7224060450)
    );
  });
  it("should read 13750884793", function () {
    assert(
      "ثلاثة عشر بليونًا وسبعمائة وخمسون مليونًا وثمانمائة وأربعة وثمانون ألفًا وسبعمائة وثلاثة وتسعون",
      parse(13750884793)
    );
  });
  it("should read 5023946365", function () {
    assert(
      "خمسة بلايين وثلاثة وعشرون مليونًا وتسعمائة وستة وأربعون ألفًا وثلاثمائة وخمسة وستون",
      parse(5023946365)
    );
  });
  it("should read 14057822216", function () {
    assert(
      "أربعة عشر بليونًا وسبعة وخمسون مليونًا وثمانمائة واثنان وعشرون ألفًا ومائتان وستة عشر",
      parse(14057822216)
    );
  });
  it("should read 16787605264", function () {
    assert(
      "ستة عشر بليونًا وسبعمائة وسبعة وثمانون مليونًا وستمائة وخمسة آلاف ومائتان وأربعة وستون",
      parse(16787605264)
    );
  });
  it("should read 29487522307", function () {
    assert(
      "تسعة وعشرون بليونًا وأربعمائة وسبعة وثمانون مليونًا وخمسمائة واثنان وعشرون ألفًا وثلاثمائة وسبعة",
      parse(29487522307)
    );
  });
  it("should read 16488864930", function () {
    assert(
      "ستة عشر بليونًا وأربعمائة وثمانية وثمانون مليونًا وثمانمائة وأربعة وستون ألفًا وتسعمائة وثلاثون",
      parse(16488864930)
    );
  });
  it("should read 23766582734", function () {
    assert(
      "ثلاثة وعشرون بليونًا وسبعمائة وستة وستون مليونًا وخمسمائة واثنان وثمانون ألفًا وسبعمائة وأربعة وثلاثون",
      parse(23766582734)
    );
  });
  it("should read 11442595246", function () {
    assert(
      "أحد عشر بليونًا وأربعمائة واثنان وأربعون مليونًا وخمسمائة وخمسة وتسعون ألفًا ومائتان وستة وأربعون",
      parse(11442595246)
    );
  });
  it("should read 4335512790", function () {
    assert(
      "أربعة بلايين وثلاثمائة وخمسة وثلاثون مليونًا وخمسمائة وإثنا عشر ألفًا وسبعمائة وتسعون",
      parse(4335512790)
    );
  });
  it("should read 12089178160", function () {
    assert(
      "إثنا عشر بليونًا وتسعة وثمانون مليونًا ومائة وثمانية وسبعون ألفًا ومائة وستون",
      parse(12089178160)
    );
  });
  it("should read 16455554903", function () {
    assert(
      "ستة عشر بليونًا وأربعمائة وخمسة وخمسون مليونًا وخمسمائة وأربعة وخمسون ألفًا وتسعمائة وثلاثة",
      parse(16455554903)
    );
  });
  it("should read 13075469819", function () {
    assert(
      "ثلاثة عشر بليونًا وخمسة وسبعون مليونًا وأربعمائة وتسعة وستون ألفًا وثمانمائة وتسعة عشر",
      parse(13075469819)
    );
  });
  it("should read 27269573457", function () {
    assert(
      "سبعة وعشرون بليونًا ومائتان وتسعة وستون مليونًا وخمسمائة وثلاثة وسبعون ألفًا وأربعمائة وسبعة وخمسون",
      parse(27269573457)
    );
  });
  it("should read 26265452965", function () {
    assert(
      "ستة وعشرون بليونًا ومائتان وخمسة وستون مليونًا وأربعمائة واثنان وخمسون ألفًا وتسعمائة وخمسة وستون",
      parse(26265452965)
    );
  });
  it("should read 6295123378", function () {
    assert(
      "ستة بلايين ومائتان وخمسة وتسعون مليونًا ومائة وثلاثة وعشرون ألفًا وثلاثمائة وثمانية وسبعون",
      parse(6295123378)
    );
  });
  it("should read 17761774409", function () {
    assert(
      "سبعة عشر بليونًا وسبعمائة وواحد وستون مليونًا وسبعمائة وأربعة وسبعون ألفًا وأربعمائة وتسعة",
      parse(17761774409)
    );
  });
  it("should read 6818749068", function () {
    assert(
      "ستة بلايين وثمانمائة وثمانية عشر مليونًا وسبعمائة وتسعة وأربعون ألفًا وثمانية وستون",
      parse(6818749068)
    );
  });
  it("should read 19988666021", function () {
    assert(
      "تسعة عشر بليونًا وتسعمائة وثمانية وثمانون مليونًا وستمائة وستة وستون ألفًا وواحد وعشرون",
      parse(19988666021)
    );
  });
  it("should read 28656870617", function () {
    assert(
      "ثمانية وعشرون بليونًا وستمائة وستة وخمسون مليونًا وثمانمائة وسبعون ألفًا وستمائة وسبعة عشر",
      parse(28656870617)
    );
  });
  it("should read 10731996991", function () {
    assert(
      "عشرة بلايين وسبعمائة وواحد وثلاثون مليونًا وتسعمائة وستة وتسعون ألفًا وتسعمائة وواحد وتسعون",
      parse(10731996991)
    );
  });
  it("should read 21256884555", function () {
    assert(
      "واحد وعشرون بليونًا ومائتان وستة وخمسون مليونًا وثمانمائة وأربعة وثمانون ألفًا وخمسمائة وخمسة وخمسون",
      parse(21256884555)
    );
  });
  it("should read 4589182593", function () {
    assert(
      "أربعة بلايين وخمسمائة وتسعة وثمانون مليونًا ومائة واثنان وثمانون ألفًا وخمسمائة وثلاثة وتسعون",
      parse(4589182593)
    );
  });
  it("should read 29909292220", function () {
    assert(
      "تسعة وعشرون بليونًا وتسعمائة وتسعة ملايين ومائتان واثنان وتسعون ألفًا ومائتان وعشرون",
      parse(29909292220)
    );
  });
  it("should read 13627097053", function () {
    assert(
      "ثلاثة عشر بليونًا وستمائة وسبعة وعشرون مليونًا وسبعة وتسعون ألفًا وثلاثة وخمسون",
      parse(13627097053)
    );
  });
  it("should read 24791669320", function () {
    assert(
      "أربعة وعشرون بليونًا وسبعمائة وواحد وتسعون مليونًا وستمائة وتسعة وستون ألفًا وثلاثمائة وعشرون",
      parse(24791669320)
    );
  });
  it("should read 26613958267", function () {
    assert(
      "ستة وعشرون بليونًا وستمائة وثلاثة عشر مليونًا وتسعمائة وثمانية وخمسون ألفًا ومائتان وسبعة وستون",
      parse(26613958267)
    );
  });
  it("should read 12995256928", function () {
    assert(
      "إثنا عشر بليونًا وتسعمائة وخمسة وتسعون مليونًا ومائتان وستة وخمسون ألفًا وتسعمائة وثمانية وعشرون",
      parse(12995256928)
    );
  });
  it("should read 27891627178", function () {
    assert(
      "سبعة وعشرون بليونًا وثمانمائة وواحد وتسعون مليونًا وستمائة وسبعة وعشرون ألفًا ومائة وثمانية وسبعون",
      parse(27891627178)
    );
  });
  it("should read 14243090676", function () {
    assert(
      "أربعة عشر بليونًا ومائتان وثلاثة وأربعون مليونًا وتسعون ألفًا وستمائة وستة وسبعون",
      parse(14243090676)
    );
  });
  it("should read 21258561579", function () {
    assert(
      "واحد وعشرون بليونًا ومائتان وثمانية وخمسون مليونًا وخمسمائة وواحد وستون ألفًا وخمسمائة وتسعة وسبعون",
      parse(21258561579)
    );
  });
  it("should read 13960145867", function () {
    assert(
      "ثلاثة عشر بليونًا وتسعمائة وستون مليونًا ومائة وخمسة وأربعون ألفًا وثمانمائة وسبعة وستون",
      parse(13960145867)
    );
  });
  it("should read 17303689093", function () {
    assert(
      "سبعة عشر بليونًا وثلاثمائة وثلاثة ملايين وستمائة وتسعة وثمانون ألفًا وثلاثة وتسعون",
      parse(17303689093)
    );
  });
  it("should read 19118643045", function () {
    assert(
      "تسعة عشر بليونًا ومائة وثمانية عشر مليونًا وستمائة وثلاثة وأربعون ألفًا وخمسة وأربعون",
      parse(19118643045)
    );
  });
  it("should read 7416942456", function () {
    assert(
      "سبعة بلايين وأربعمائة وستة عشر مليونًا وتسعمائة واثنان وأربعون ألفًا وأربعمائة وستة وخمسون",
      parse(7416942456)
    );
  });
  it("should read 6249241232", function () {
    assert(
      "ستة بلايين ومائتان وتسعة وأربعون مليونًا ومائتان وواحد وأربعون ألفًا ومائتان واثنان وثلاثون",
      parse(6249241232)
    );
  });
  it("should read 27460816079", function () {
    assert(
      "سبعة وعشرون بليونًا وأربعمائة وستون مليونًا وثمانمائة وستة عشر ألفًا وتسعة وسبعون",
      parse(27460816079)
    );
  });
  it("should read 17163584737", function () {
    assert(
      "سبعة عشر بليونًا ومائة وثلاثة وستون مليونًا وخمسمائة وأربعة وثمانون ألفًا وسبعمائة وسبعة وثلاثون",
      parse(17163584737)
    );
  });
  it("should read 24816291780", function () {
    assert(
      "أربعة وعشرون بليونًا وثمانمائة وستة عشر مليونًا ومائتان وواحد وتسعون ألفًا وسبعمائة وثمانون",
      parse(24816291780)
    );
  });
  it("should read 23308449608", function () {
    assert(
      "ثلاثة وعشرون بليونًا وثلاثمائة وثمانية ملايين وأربعمائة وتسعة وأربعون ألفًا وستمائة وثمانية",
      parse(23308449608)
    );
  });
  it("should read 20140626317", function () {
    assert(
      "عشرون بليونًا ومائة وأربعون مليونًا وستمائة وستة وعشرون ألفًا وثلاثمائة وسبعة عشر",
      parse(20140626317)
    );
  });
  it("should read 25154402870", function () {
    assert(
      "خمسة وعشرون بليونًا ومائة وأربعة وخمسون مليونًا وأربعمائة وألفان وثمانمائة وسبعون",
      parse(25154402870)
    );
  });
  it("should read 20130197562", function () {
    assert(
      "عشرون بليونًا ومائة وثلاثون مليونًا ومائة وسبعة وتسعون ألفًا وخمسمائة واثنان وستون",
      parse(20130197562)
    );
  });
  it("should read 26469434921", function () {
    assert(
      "ستة وعشرون بليونًا وأربعمائة وتسعة وستون مليونًا وأربعمائة وأربعة وثلاثون ألفًا وتسعمائة وواحد وعشرون",
      parse(26469434921)
    );
  });
  it("should read 22496330021", function () {
    assert(
      "اثنان وعشرون بليونًا وأربعمائة وستة وتسعون مليونًا وثلاثمائة وثلاثون ألفًا وواحد وعشرون",
      parse(22496330021)
    );
  });
  it("should read 23682959381", function () {
    assert(
      "ثلاثة وعشرون بليونًا وستمائة واثنان وثمانون مليونًا وتسعمائة وتسعة وخمسون ألفًا وثلاثمائة وواحد وثمانون",
      parse(23682959381)
    );
  });
  it("should read 5687191879", function () {
    assert(
      "خمسة بلايين وستمائة وسبعة وثمانون مليونًا ومائة وواحد وتسعون ألفًا وثمانمائة وتسعة وسبعون",
      parse(5687191879)
    );
  });
  it("should read 5521672986", function () {
    assert(
      "خمسة بلايين وخمسمائة وواحد وعشرون مليونًا وستمائة واثنان وسبعون ألفًا وتسعمائة وستة وثمانون",
      parse(5521672986)
    );
  });
  it("should read 8870198443", function () {
    assert(
      "ثمانية بلايين وثمانمائة وسبعون مليونًا ومائة وثمانية وتسعون ألفًا وأربعمائة وثلاثة وأربعون",
      parse(8870198443)
    );
  });
  it("should read 15529652581", function () {
    assert(
      "خمسة عشر بليونًا وخمسمائة وتسعة وعشرون مليونًا وستمائة واثنان وخمسون ألفًا وخمسمائة وواحد وثمانون",
      parse(15529652581)
    );
  });
  it("should read 17096658501", function () {
    assert(
      "سبعة عشر بليونًا وستة وتسعون مليونًا وستمائة وثمانية وخمسون ألفًا وخمسمائة وواحد",
      parse(17096658501)
    );
  });
  it("should read 6762632181", function () {
    assert(
      "ستة بلايين وسبعمائة واثنان وستون مليونًا وستمائة واثنان وثلاثون ألفًا ومائة وواحد وثمانون",
      parse(6762632181)
    );
  });
  it("should read 8012422660", function () {
    assert(
      "ثمانية بلايين وإثنا عشر مليونًا وأربعمائة واثنان وعشرون ألفًا وستمائة وستون",
      parse(8012422660)
    );
  });
  it("should read 9921194315", function () {
    assert(
      "تسعة بلايين وتسعمائة وواحد وعشرون مليونًا ومائة وأربعة وتسعون ألفًا وثلاثمائة وخمسة عشر",
      parse(9921194315)
    );
  });
  it("should read 19158867145", function () {
    assert(
      "تسعة عشر بليونًا ومائة وثمانية وخمسون مليونًا وثمانمائة وسبعة وستون ألفًا ومائة وخمسة وأربعون",
      parse(19158867145)
    );
  });
  it("should read 12903347395", function () {
    assert(
      "إثنا عشر بليونًا وتسعمائة وثلاثة ملايين وثلاثمائة وسبعة وأربعون ألفًا وثلاثمائة وخمسة وتسعون",
      parse(12903347395)
    );
  });
  it("should read 4543701767", function () {
    assert(
      "أربعة بلايين وخمسمائة وثلاثة وأربعون مليونًا وسبعمائة وألف وسبعمائة وسبعة وستون",
      parse(4543701767)
    );
  });
  it("should read 9267469271", function () {
    assert(
      "تسعة بلايين ومائتان وسبعة وستون مليونًا وأربعمائة وتسعة وستون ألفًا ومائتان وواحد وسبعون",
      parse(9267469271)
    );
  });
  it("should read 19396611346", function () {
    assert(
      "تسعة عشر بليونًا وثلاثمائة وستة وتسعون مليونًا وستمائة وأحد عشر ألفًا وثلاثمائة وستة وأربعون",
      parse(19396611346)
    );
  });
  it("should read 29617892237", function () {
    assert(
      "تسعة وعشرون بليونًا وستمائة وسبعة عشر مليونًا وثمانمائة واثنان وتسعون ألفًا ومائتان وسبعة وثلاثون",
      parse(29617892237)
    );
  });
  it("should read 27689250281", function () {
    assert(
      "سبعة وعشرون بليونًا وستمائة وتسعة وثمانون مليونًا ومائتان وخمسون ألفًا ومائتان وواحد وثمانون",
      parse(27689250281)
    );
  });
  it("should read 17754050193", function () {
    assert(
      "سبعة عشر بليونًا وسبعمائة وأربعة وخمسون مليونًا وخمسون ألفًا ومائة وثلاثة وتسعون",
      parse(17754050193)
    );
  });
  it("should read 24088755095", function () {
    assert(
      "أربعة وعشرون بليونًا وثمانية وثمانون مليونًا وسبعمائة وخمسة وخمسون ألفًا وخمسة وتسعون",
      parse(24088755095)
    );
  });
  it("should read 27047547970", function () {
    assert(
      "سبعة وعشرون بليونًا وسبعة وأربعون مليونًا وخمسمائة وسبعة وأربعون ألفًا وتسعمائة وسبعون",
      parse(27047547970)
    );
  });
  it("should read 14096950876", function () {
    assert(
      "أربعة عشر بليونًا وستة وتسعون مليونًا وتسعمائة وخمسون ألفًا وثمانمائة وستة وسبعون",
      parse(14096950876)
    );
  });
  it("should read 25999238855", function () {
    assert(
      "خمسة وعشرون بليونًا وتسعمائة وتسعة وتسعون مليونًا ومائتان وثمانية وثلاثون ألفًا وثمانمائة وخمسة وخمسون",
      parse(25999238855)
    );
  });
  it("should read 7216890068", function () {
    assert(
      "سبعة بلايين ومائتان وستة عشر مليونًا وثمانمائة وتسعون ألفًا وثمانية وستون",
      parse(7216890068)
    );
  });
  it("should read 21014905170", function () {
    assert(
      "واحد وعشرون بليونًا وأربعة عشر مليونًا وتسعمائة وخمسة آلاف ومائة وسبعون",
      parse(21014905170)
    );
  });
  it("should read 25075665218", function () {
    assert(
      "خمسة وعشرون بليونًا وخمسة وسبعون مليونًا وستمائة وخمسة وستون ألفًا ومائتان وثمانية عشر",
      parse(25075665218)
    );
  });
  it("should read 17452182001", function () {
    assert(
      "سبعة عشر بليونًا وأربعمائة واثنان وخمسون مليونًا ومائة واثنان وثمانون ألفًا وواحد",
      parse(17452182001)
    );
  });
  it("should read 29242363786", function () {
    assert(
      "تسعة وعشرون بليونًا ومائتان واثنان وأربعون مليونًا وثلاثمائة وثلاثة وستون ألفًا وسبعمائة وستة وثمانون",
      parse(29242363786)
    );
  });
  it("should read 26850246085", function () {
    assert(
      "ستة وعشرون بليونًا وثمانمائة وخمسون مليونًا ومائتان وستة وأربعون ألفًا وخمسة وثمانون",
      parse(26850246085)
    );
  });
  it("should read 9583624446", function () {
    assert(
      "تسعة بلايين وخمسمائة وثلاثة وثمانون مليونًا وستمائة وأربعة وعشرون ألفًا وأربعمائة وستة وأربعون",
      parse(9583624446)
    );
  });
  it("should read 29634225801", function () {
    assert(
      "تسعة وعشرون بليونًا وستمائة وأربعة وثلاثون مليونًا ومائتان وخمسة وعشرون ألفًا وثمانمائة وواحد",
      parse(29634225801)
    );
  });
  it("should read 9170385815", function () {
    assert(
      "تسعة بلايين ومائة وسبعون مليونًا وثلاثمائة وخمسة وثمانون ألفًا وثمانمائة وخمسة عشر",
      parse(9170385815)
    );
  });
  it("should read 21049124635", function () {
    assert(
      "واحد وعشرون بليونًا وتسعة وأربعون مليونًا ومائة وأربعة وعشرون ألفًا وستمائة وخمسة وثلاثون",
      parse(21049124635)
    );
  });
  it("should read 17499329735", function () {
    assert(
      "سبعة عشر بليونًا وأربعمائة وتسعة وتسعون مليونًا وثلاثمائة وتسعة وعشرون ألفًا وسبعمائة وخمسة وثلاثون",
      parse(17499329735)
    );
  });
  it("should read 24554954068", function () {
    assert(
      "أربعة وعشرون بليونًا وخمسمائة وأربعة وخمسون مليونًا وتسعمائة وأربعة وخمسون ألفًا وثمانية وستون",
      parse(24554954068)
    );
  });
  it("should read 9041250507", function () {
    assert(
      "تسعة بلايين وواحد وأربعون مليونًا ومائتان وخمسون ألفًا وخمسمائة وسبعة",
      parse(9041250507)
    );
  });
  it("should read 14082454674", function () {
    assert(
      "أربعة عشر بليونًا واثنان وثمانون مليونًا وأربعمائة وأربعة وخمسون ألفًا وستمائة وأربعة وسبعون",
      parse(14082454674)
    );
  });
  it("should read 29844958883", function () {
    assert(
      "تسعة وعشرون بليونًا وثمانمائة وأربعة وأربعون مليونًا وتسعمائة وثمانية وخمسون ألفًا وثمانمائة وثلاثة وثمانون",
      parse(29844958883)
    );
  });
  it("should read 28566609484", function () {
    assert(
      "ثمانية وعشرون بليونًا وخمسمائة وستة وستون مليونًا وستمائة وتسعة آلاف وأربعمائة وأربعة وثمانون",
      parse(28566609484)
    );
  });
  it("should read 17701872479", function () {
    assert(
      "سبعة عشر بليونًا وسبعمائة ومليون وثمانمائة واثنان وسبعون ألفًا وأربعمائة وتسعة وسبعون",
      parse(17701872479)
    );
  });
  it("should read 23826665370", function () {
    assert(
      "ثلاثة وعشرون بليونًا وثمانمائة وستة وعشرون مليونًا وستمائة وخمسة وستون ألفًا وثلاثمائة وسبعون",
      parse(23826665370)
    );
  });
  it("should read 14300883967", function () {
    assert(
      "أربعة عشر بليونًا وثلاثمائة مليون وثمانمائة وثلاثة وثمانون ألفًا وتسعمائة وسبعة وستون",
      parse(14300883967)
    );
  });
  it("should read 14334478254", function () {
    assert(
      "أربعة عشر بليونًا وثلاثمائة وأربعة وثلاثون مليونًا وأربعمائة وثمانية وسبعون ألفًا ومائتان وأربعة وخمسون",
      parse(14334478254)
    );
  });
  it("should read 14220585462", function () {
    assert(
      "أربعة عشر بليونًا ومائتان وعشرون مليونًا وخمسمائة وخمسة وثمانون ألفًا وأربعمائة واثنان وستون",
      parse(14220585462)
    );
  });
  it("should read 27537039983", function () {
    assert(
      "سبعة وعشرون بليونًا وخمسمائة وسبعة وثلاثون مليونًا وتسعة وثلاثون ألفًا وتسعمائة وثلاثة وثمانون",
      parse(27537039983)
    );
  });
  it("should read 28465797559", function () {
    assert(
      "ثمانية وعشرون بليونًا وأربعمائة وخمسة وستون مليونًا وسبعمائة وسبعة وتسعون ألفًا وخمسمائة وتسعة وخمسون",
      parse(28465797559)
    );
  });
  it("should read 11575439344", function () {
    assert(
      "أحد عشر بليونًا وخمسمائة وخمسة وسبعون مليونًا وأربعمائة وتسعة وثلاثون ألفًا وثلاثمائة وأربعة وأربعون",
      parse(11575439344)
    );
  });
  it("should read 4325053256", function () {
    assert(
      "أربعة بلايين وثلاثمائة وخمسة وعشرون مليونًا وثلاثة وخمسون ألفًا ومائتان وستة وخمسون",
      parse(4325053256)
    );
  });
  it("should read 27831836371", function () {
    assert(
      "سبعة وعشرون بليونًا وثمانمائة وواحد وثلاثون مليونًا وثمانمائة وستة وثلاثون ألفًا وثلاثمائة وواحد وسبعون",
      parse(27831836371)
    );
  });
  it("should read 14333619622", function () {
    assert(
      "أربعة عشر بليونًا وثلاثمائة وثلاثة وثلاثون مليونًا وستمائة وتسعة عشر ألفًا وستمائة واثنان وعشرون",
      parse(14333619622)
    );
  });
  it("should read 20566792703", function () {
    assert(
      "عشرون بليونًا وخمسمائة وستة وستون مليونًا وسبعمائة واثنان وتسعون ألفًا وسبعمائة وثلاثة",
      parse(20566792703)
    );
  });
  it("should read 22639560414", function () {
    assert(
      "اثنان وعشرون بليونًا وستمائة وتسعة وثلاثون مليونًا وخمسمائة وستون ألفًا وأربعمائة وأربعة عشر",
      parse(22639560414)
    );
  });
  it("should read 22934928859", function () {
    assert(
      "اثنان وعشرون بليونًا وتسعمائة وأربعة وثلاثون مليونًا وتسعمائة وثمانية وعشرون ألفًا وثمانمائة وتسعة وخمسون",
      parse(22934928859)
    );
  });
  it("should read 9262305902", function () {
    assert(
      "تسعة بلايين ومائتان واثنان وستون مليونًا وثلاثمائة وخمسة آلاف وتسعمائة واثنان",
      parse(9262305902)
    );
  });
  it("should read 27761497075", function () {
    assert(
      "سبعة وعشرون بليونًا وسبعمائة وواحد وستون مليونًا وأربعمائة وسبعة وتسعون ألفًا وخمسة وسبعون",
      parse(27761497075)
    );
  });
  it("should read 11452920191", function () {
    assert(
      "أحد عشر بليونًا وأربعمائة واثنان وخمسون مليونًا وتسعمائة وعشرون ألفًا ومائة وواحد وتسعون",
      parse(11452920191)
    );
  });
  it("should read 14516922721", function () {
    assert(
      "أربعة عشر بليونًا وخمسمائة وستة عشر مليونًا وتسعمائة واثنان وعشرون ألفًا وسبعمائة وواحد وعشرون",
      parse(14516922721)
    );
  });
  it("should read 18687181301", function () {
    assert(
      "ثمانية عشر بليونًا وستمائة وسبعة وثمانون مليونًا ومائة وواحد وثمانون ألفًا وثلاثمائة وواحد",
      parse(18687181301)
    );
  });
  it("should read 17360368955", function () {
    assert(
      "سبعة عشر بليونًا وثلاثمائة وستون مليونًا وثلاثمائة وثمانية وستون ألفًا وتسعمائة وخمسة وخمسون",
      parse(17360368955)
    );
  });
  it("should read 13569307243", function () {
    assert(
      "ثلاثة عشر بليونًا وخمسمائة وتسعة وستون مليونًا وثلاثمائة وسبعة آلاف ومائتان وثلاثة وأربعون",
      parse(13569307243)
    );
  });
  it("should read 18928244067", function () {
    assert(
      "ثمانية عشر بليونًا وتسعمائة وثمانية وعشرون مليونًا ومائتان وأربعة وأربعون ألفًا وسبعة وستون",
      parse(18928244067)
    );
  });
  it("should read 11447387696", function () {
    assert(
      "أحد عشر بليونًا وأربعمائة وسبعة وأربعون مليونًا وثلاثمائة وسبعة وثمانون ألفًا وستمائة وستة وتسعون",
      parse(11447387696)
    );
  });
  it("should read 23161875703", function () {
    assert(
      "ثلاثة وعشرون بليونًا ومائة وواحد وستون مليونًا وثمانمائة وخمسة وسبعون ألفًا وسبعمائة وثلاثة",
      parse(23161875703)
    );
  });
  it("should read 4562174141", function () {
    assert(
      "أربعة بلايين وخمسمائة واثنان وستون مليونًا ومائة وأربعة وسبعون ألفًا ومائة وواحد وأربعون",
      parse(4562174141)
    );
  });
  it("should read 25718683213", function () {
    assert(
      "خمسة وعشرون بليونًا وسبعمائة وثمانية عشر مليونًا وستمائة وثلاثة وثمانون ألفًا ومائتان وثلاثة عشر",
      parse(25718683213)
    );
  });
  it("should read 29026486439", function () {
    assert(
      "تسعة وعشرون بليونًا وستة وعشرون مليونًا وأربعمائة وستة وثمانون ألفًا وأربعمائة وتسعة وثلاثون",
      parse(29026486439)
    );
  });
  it("should read 27858383398", function () {
    assert(
      "سبعة وعشرون بليونًا وثمانمائة وثمانية وخمسون مليونًا وثلاثمائة وثلاثة وثمانون ألفًا وثلاثمائة وثمانية وتسعون",
      parse(27858383398)
    );
  });
  it("should read 17110113037", function () {
    assert(
      "سبعة عشر بليونًا ومائة وعشرة ملايين ومائة وثلاثة عشر ألفًا وسبعة وثلاثون",
      parse(17110113037)
    );
  });
  it("should read 6129835136", function () {
    assert(
      "ستة بلايين ومائة وتسعة وعشرون مليونًا وثمانمائة وخمسة وثلاثون ألفًا ومائة وستة وثلاثون",
      parse(6129835136)
    );
  });
  it("should read 10271579446", function () {
    assert(
      "عشرة بلايين ومائتان وواحد وسبعون مليونًا وخمسمائة وتسعة وسبعون ألفًا وأربعمائة وستة وأربعون",
      parse(10271579446)
    );
  });
  it("should read 9836869335", function () {
    assert(
      "تسعة بلايين وثمانمائة وستة وثلاثون مليونًا وثمانمائة وتسعة وستون ألفًا وثلاثمائة وخمسة وثلاثون",
      parse(9836869335)
    );
  });
  it("should read 26826019466", function () {
    assert(
      "ستة وعشرون بليونًا وثمانمائة وستة وعشرون مليونًا وتسعة عشر ألفًا وأربعمائة وستة وستون",
      parse(26826019466)
    );
  });
  it("should read 11756067267", function () {
    assert(
      "أحد عشر بليونًا وسبعمائة وستة وخمسون مليونًا وسبعة وستون ألفًا ومائتان وسبعة وستون",
      parse(11756067267)
    );
  });
  it("should read 4973225019", function () {
    assert(
      "أربعة بلايين وتسعمائة وثلاثة وسبعون مليونًا ومائتان وخمسة وعشرون ألفًا وتسعة عشر",
      parse(4973225019)
    );
  });
  it("should read 8205170168", function () {
    assert(
      "ثمانية بلايين ومائتان وخمسة ملايين ومائة وسبعون ألفًا ومائة وثمانية وستون",
      parse(8205170168)
    );
  });
  it("should read 5696064955", function () {
    assert(
      "خمسة بلايين وستمائة وستة وتسعون مليونًا وأربعة وستون ألفًا وتسعمائة وخمسة وخمسون",
      parse(5696064955)
    );
  });
  it("should read 7479650641", function () {
    assert(
      "سبعة بلايين وأربعمائة وتسعة وسبعون مليونًا وستمائة وخمسون ألفًا وستمائة وواحد وأربعون",
      parse(7479650641)
    );
  });
  it("should read 19036554168", function () {
    assert(
      "تسعة عشر بليونًا وستة وثلاثون مليونًا وخمسمائة وأربعة وخمسون ألفًا ومائة وثمانية وستون",
      parse(19036554168)
    );
  });
  it("should read 7542216918", function () {
    assert(
      "سبعة بلايين وخمسمائة واثنان وأربعون مليونًا ومائتان وستة عشر ألفًا وتسعمائة وثمانية عشر",
      parse(7542216918)
    );
  });
});
