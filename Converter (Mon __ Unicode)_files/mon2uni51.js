//Befor edit those code read ..
// JavaScript Document Reordering By HV-986.iblogger.org <freehostiing site mirror:talachan.co.cc> if you get problem on those converter let mail me hv986[at]talachan.co.cc source code zg2uni by solveware solution we get permission from NgStart to edit and be Mon2Uni Converter. All Converter and Mon Unicode Keyboard Multi OS are aviliable at http://code.google.com/p/mon2uni
// Thanks for Using But hv-986 did not allow for Commercial and Organization, only personal purpose to use and finish your job.
// If you want to Edit or change something on those source code take my permission on above email.
// Some Mon order are still in Problem but those are usually use.
// That Converter Purpose only for Mon.ttf to Unicode and Unicode to Mon.ttf

function Mon_Uni(input)
{
  var hv986m2uConverter=input;
   var tallAA = "\u102B";
   var AA = "\u102C";
   var vi = "\u102D";
   // up-media
   var ii = "\u102E";
   var u = "\u102F";
   var uu = "\u1030";
   var ve = "\u1031";
   var ai = "\u1032";
   var ans = "\u1036";
   var db = "\u1037";
   var visarga = "\u1038";
   var asat = "\u103A";
   var ya = "\u103B";
   var ra = "\u103C";
   var zero = "\u1040";
   hv986m2uConverter = hv986m2uConverter.replace ( /\u106A/g, "\u1009");
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1025(?=[\u1039\u102C])/g, "\u1009"); //new
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1025\u102E/g, "\u1026"); //new
   hv986m2uConverter = hv986m2uConverter.replace ( /\u106B/g, "\u100A");
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1090/g, "\u101B");
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1040/g, zero);
   hv986m2uConverter = hv986m2uConverter.replace ( /\u108F/g, "\u1014");
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1012/g, "\u1012");
   /////////////
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u105E/g, "\u1039\u105C"); // kwat BBA
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u103E/g, "\u105E"); // Media NA
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u103D/g, "\u103E");  // kwatHa
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u103C/g, "\u103D");  // kwatwa
   hv986m2uConverter = hv986m2uConverter.replace ( /[\u103B\u107E\u107F\u1080\u1081\u1082\u1083\u1084]/g, ra);
   // kwatya & kwartra
   hv986m2uConverter = hv986m2uConverter.replace ( /(\u103C)([\u1000-\u1021])(\u1039[\u1000-\u1021])?/g, "$2$3$1");
   // reordering ra
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u1007\u103A/g, "\u105B");  // JHA
   hv986m2uConverter = hv986m2uConverter.replace ( /[\u103A\u107D]/g, ya);
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1039/g, "\u103A");
   // ya
   ////////////////////// Reordering
   
   hv986m2uConverter = hv986m2uConverter.replace ( /(\u1031)?(\u103C)?([\u1000-\u1021])\u1064/g, "\u1064$1$2$3");
   // reordering kinzi
   hv986m2uConverter = hv986m2uConverter.replace ( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108B/g, "\u1064$1$2$3\u102D");
   // reordering kinzi lgt
   hv986m2uConverter = hv986m2uConverter.replace ( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108C/g, "\u1064$1$2$3\u102E");
   // reordering kinzi lgtsk
   hv986m2uConverter = hv986m2uConverter.replace ( /(\u1031)?(\u103C)?([\u1000-\u1021])\u108D/g, "\u1064$1$2$3\u1036");
   // reordering kinzi ttt
   ////////////////////////////////////////
   hv986m2uConverter = hv986m2uConverter.replace ( /\u105A/g, tallAA + asat);
   hv986m2uConverter = hv986m2uConverter.replace ( /\u108E/g, vi + ans);
   // umd ttt
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1033/g, u);
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1034/g, uu);
   ///////////////////////////////////////Pasint order human error
  hv986m2uConverter = hv986m2uConverter.replace ( /([\u1000-\u1060\u])([\u102B\u102C\u102D\u102E\u1032\u1035\u1036\u1039\u1089\u1098\u109D]){1,2}([\u103C\u1060\u1061\u1062\u1063\u105B\u105E\u1065\u1066\u1067\u1068\u1069\u1070\u1071\u1072\u1073\u1074\u1075\u1076\u1077\u1078\u1079\u107A\u107B\u107C\u1085])/g, "$1$3$2");  //new
   /////////////
   hv986m2uConverter = hv986m2uConverter.replace ( /(\u1031)?(\u103C)?([\u1000-\u1021])\u109A/g, "\u1064$1$2$3\u1033"); // Mon kinzi aii
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1064/g, "\u1004\u103A\u1039");
   hv986m2uConverter = hv986m2uConverter.replace ( /\u104E/g, "\u104E\u1004\u103A\u1038");
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1060/g, '\u1039\u1000');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1061/g, '\u1039\u1001');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1062/g, '\u1039\u1002');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1063/g, '\u1039\u1003');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1065/g, '\u1039\u1005');
   hv986m2uConverter = hv986m2uConverter.replace ( /[\u1066\u1067]/g, '\u1039\u1006');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1068/g, '\u1039\u1007');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1069/g, '\u1039\u1008');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u106C/g, '\u1039\u100B');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1070/g, '\u1039\u100F');
   hv986m2uConverter = hv986m2uConverter.replace ( /[\u1071\u1072]/g, '\u1039\u1010');
   hv986m2uConverter = hv986m2uConverter.replace ( /[\u1073\u1074]/g, '\u1039\u1011');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1075/g, '\u1039\u1012');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1076/g, '\u1039\u1013');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1077/g, '\u1039\u1014');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1078/g, '\u1039\u1015');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1079/g, '\u1039\u1016');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u107A/g, '\u1039\u1017');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u107B/g, '\u1039\u1018');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u107C/g, '\u1039\u1019');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1085/g, '\u1039\u101C');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u106D/g, '\u1039\u100C');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1091/g, '\u100F\u1039\u100D');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1092/g, '\u100B\u1039\u100C');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u1097/g, '\u100B\u1039\u100B');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u106F/g, '\u100D\u1039\u100E');
   hv986m2uConverter = hv986m2uConverter.replace ( /\u106E/g, '\u100D\u1039\u100D');
   //Mon output.replace
   var bba = "\u105C"; // BBA
   var bee = "\u105D"; // BEE
   var Me = "\u1028"; // E
   var kwatHa = "\u103E";
   var kna = "\u105E"; // Media NA
   var myie = "\u1035"; // Myanmar E
   var kwatBBA = "\u1039\u105C"; // kwatBBA
   var kwatWa = "\u103D"; // kwatwa
   var Pole = '\u102D\u1032'; //pole
   var Aao = '\u1029';
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u1004\u105B/g, "\u105A");  // NGA
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u105B/g, "\u1039\u105A"); // kwat NGA
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u105C/g, "\u1060");  // Media LA
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u1050/g, "\u105C"); // BBA
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u1022/g, "\u105D");        // BEE
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u103F/g, "\u105F");  // Media Ma
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u1086/g, "\u103F"); // Media SSa
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u1035/g, "\u1034"); // Mon O
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u1098/g, "\u1033"); // Mon II
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u109D/g, "\u1035"); // My ie
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u109B/g, "\u1039\u100A"); // kwat Nya
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u109C/g, "\u1039\u100D"); // kwat Dat
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u1099/g, "\u102D\u1032"); // correct Pol
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u103A\u1060/g, "\u1039\u105C"); // kwat bba
   hv986m2uConverter = hv986m2uConverter.replace  ( /\u1088/g, "\u103E\u102F"); // kwat hmu
   hv986m2uConverter = hv986m2uConverter.replace (/\u1099/g, Pole);
   hv986m2uConverter = hv986m2uConverter.replace ( /\u103E\u103B/g, ya + kwatHa);
   /////////////////////////////////////////////////////////
   hv986m2uConverter = hv986m2uConverter.replace (/(([\u1000-\u101C\u101E-\u102A\u102C\u102E-\u103F\u104C-\u109F]))(\u1040)(?=\u0020)?/g, function($0, $1)
   {
      return $1 ? $1 + '\u101D' : $0 + $1;
   }
   );
   // zero and wa
    hv986m2uConverter = hv986m2uConverter.replace (/((\u101D))(\u1040)(?=\u0020)?/g, function($0, $1)
   {
      return $1 ? $1 + '\u101D' : $0 + $1;
   }
   );
   // zero and wa
    hv986m2uConverter = hv986m2uConverter.replace (/(([\u1000-\u101C\u101E-\u102A\u102C\u102E-\u103F\u104C-\u109F\u0020]))(\u1047)/g, function($0, $1)
   {
      return $1 ? $1 + '\u101B' : $0 + $1;
   }
   );
   // seven and ra

    hv986m2uConverter = hv986m2uConverter.replace ( /(\u1047)( ? = [\u1000 - \u101C\u101E - \u102A\u102C\u102E - \u103F\u104C - \u109F\u0020])/g, "\u101B");
   // seven and ra
   
  /* hv986m2uConverter = hv986m2uConverter.replace ( /(\u1031)?([\u1000-\u1021])(\u1039[\u1000-\u1021])?([\u102D\u102E\u1032])?([\u1036\u1037\u1038]{0,2})([\u103B-\u103C]{0,3})([\u102F\u1030])?([\u102D\u102E\u1032])?/g, "$2$3$6$1$4$8$7$5");
   // reordering storage order*/
   
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u1031)?([\u1000-\u1021\u105A\-\u105D])(\u1039[\u1000-\u1021\u105A\u105C])?([\u102D\u102E\u1032\u1033\u1034\u1035])?([\u1036\u1037\u1038]{0,2})([\u103B-\u103C]{0,3})([\u102F\u1030])?([\u1036\u1037\u1038]{0,2})([\u102D\u102E\u1032])?/g, "$2$3$6$1$4$9$7$5$8");
   // reordering storage order (\u105E\u105F\u1060)
    hv986m2uConverter = hv986m2uConverter.replace (ans+u, u+ans);
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u1007\u103A/g, "\u1007\u103A"); // kwat rat
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u1029)( ? = [\u1000 - \u101C\u101E - \u102A\u102C\u102E - \u103F\u104C - \u109F\u0020])/g, Aao); /// Aao reorder
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u1004)/g, "\u105A"); // Mon Nga
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u103A)(\u1037)/g, "$2$1");
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u102F)(\u1035)/g, "$2$1");  // Mon reorder
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u1032)(\u102F)/g, "$2$1");  // Mon reorder
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u102F)(\u1033)/g, "$2$1");  // Mon reorder
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u102F)(\u102D)/g, "$2$1");  // Mon reorder
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u102F)(\u102E)/g, "$2$1");  // Mon reorder
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u102F)(\u1033)/g, "$2$1");  // Mon reorder
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u102F)(\u1035)/g, "$2$1");  // Mon reorder
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u1032)(\u103D)/g, "$2$1");  // Mon reorder
    hv986m2uConverter = hv986m2uConverter.replace ( /(\u103A)(\u103E)/g, "$2$1");  // Mon reorder
    /////////Mon re-order-Media
    hv986m2uConverter = hv986m2uConverter.replace ( /([\u102D\u102E\u1032-\u1036])([\u105E\u105F\u1060\u103D\u103E])/g, '$2$1');
    hv986m2uConverter = hv986m2uConverter.replace ( /([\u102D\u102E\u1032-\u1035])(\u1039[\u1000-\u1021\u105A\u105C])/g, '$2$1');
    hv986m2uConverter = hv986m2uConverter.replace ( /\u1031([\u103A\u103B-\u103E\u105C-\u105F\u1060]+)/g, '$1\u1031');             /// Mon reorder
    hv986m2uConverter = hv986m2uConverter.replace ( /([\u1000-\u1021\u105A\u105C])(\u103E)(\u103A)(\u1031)/g, "$1$2$4$3"); // jaik reorder
    hv986m2uConverter = hv986m2uConverter.replace ( /\u1031(\u1039[\u1000-\u1021\u105A\u105C])/g, "$1\u1031");
    hv986m2uConverter = hv986m2uConverter.replace ( /([\u1000-\u1021\u105A\u105C])(\u103C)(\u105A\u103A\u1039)/g, "$3$1$2");
    hv986m2uConverter = hv986m2uConverter.replace ( /\u1031([u105B\u105D])/g, "$1\u1031");
    //// Double error2one
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u102B\u102B/g, "\u102B");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u102C\u102C/g, "\u102C");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u102D\u102D/g, "\u102D");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u102E\u102E/g, "\u102E");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u102F\u102F/g, "\u102F");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u1030\u1030/g, "\u1030");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u1032\u1032/g, "\u1032");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u1033\u1033/g, "\u1033");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u1034\u1034/g, "\u1034");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u1035\u1035/g, "\u1035");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u1036\u1036/g, "\u1036");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u1038\u1038/g, "\u1038");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u103A\u103A/g, "\u103A");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u103B\u103B/g, "\u103B");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u103C\u103C/g, "\u103C");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u103D\u103D/g, "\u103D");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u103E\u103E/g, "\u103E");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u1039\u105A\u1039\u105A/g, "\u1039\u105A");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u105E\u105E/g, "\u105E");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u105F\u105F/g, "\u105F");
    hv986m2uConverter = hv986m2uConverter.replace  ( /\u1060\u1060/g, "\u1060");
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u102D/g, '\u102D'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u102E/g, '\u102E'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u102F/g, '\u102F'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u1030/g, '\u1030'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u1032/g, '\u1032'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u1033/g, '\u1033'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u1034/g, '\u1034'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u1035/g, '\u1035'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u1036/g, '\u1036'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u1038/g, '\u1038'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u103A/g, '\u103A'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u103D/g, '\u103D'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u103E/g, '\u103E'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u105E/g, '\u105E'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u105F/g, '\u105F'); //REMOVE-SPACE
    hv986m2uConverter = hv986m2uConverter.replace ( /\u0020\u1060/g, '\u1060'); //REMOVE-SPACE
   // For Latest Unicode Font only Mon.
   return hv986m2uConverter;
}//Mon_Uni
