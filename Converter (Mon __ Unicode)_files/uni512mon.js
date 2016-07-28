//Befor edit those code read ..
// JavaScript Document Reordering By HV-986.iblogger.org <freehostiing site mirror:talachan.co.cc> if you get problem on those converter let mail me hv986[at]talachan.co.cc source code zg2uni by solveware solution we get permission from NgStart to edit and be Mon2Uni Converter. All Converter and Mon Unicode Keyboard Multi OS are aviliable at http://code.google.com/p/mon2uni
// Thanks for Using But hv-986 did not allow for Commercial and Organization, only personal purpose to use and finish your job.
// If you want to Edit or change something on those source code take my permission on above email.
// Some Mon order are still in Problem but those are usually use.
// That Converter Purpose only for Mon.ttf to Unicode and Unicode to Mon.ttf

function Uni_Mon(input)
{
   var hv986m2uConverter = input;


   hv986m2uConverter = hv986m2uConverter.replace (/\u104E\u1004\u103A\u1038/g, '\u104E');
   hv986m2uConverter = hv986m2uConverter.replace (/\u102D\u1036/g, '\u108E');
   hv986m2uConverter = hv986m2uConverter.replace (/\u103F/g, '\u1086');
   hv986m2uConverter = hv986m2uConverter.replace (/\u105A/g, '\u1004\u105B'); // ilical-Nga
   hv986m2uConverter = hv986m2uConverter.replace (/\u105F/g, '\u103F'); // k-Ma
   hv986m2uConverter = hv986m2uConverter.replace (/\u1033/g, '\u1098'); // Aii
   hv986m2uConverter = hv986m2uConverter.replace (/\u1035/g, '\u109D'); // AB-E
   hv986m2uConverter = hv986m2uConverter.replace (/\u105C/g, '\u1050'); // BBA
   hv986m2uConverter = hv986m2uConverter.replace (/\u1060/g, '\u105C'); // AB-la
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u100D/g, '\u109C'); // k-kda
   hv986m2uConverter = hv986m2uConverter.replace (/\u102B\u103A/g, '\u105A'); // Asat ts
   hv986m2uConverter = hv986m2uConverter.replace (/\u1034/g, '\u1035'); // A-Aao arrow
   hv986m2uConverter = hv986m2uConverter.replace (/\u102D\u102F\u1032/g, '\u1099\u102F'); // Pol`
   hv986m2uConverter = hv986m2uConverter.replace (/\u100D\u102F/g, '\u100D\u1033'); // t-l
   hv986m2uConverter = hv986m2uConverter.replace (/(\u101B)([\u109D\u1099\u102E\u102D]?)(\u102F)/g, '\u1090$2$3'); // s-Ra
   hv986m2uConverter = hv986m2uConverter.replace (/\u105D/g, '\u1022'); // K-Bba
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u101E/g, '\u105D'); // K-SSa
   //


   hv986m2uConverter = hv986m2uConverter.replace (/(\u102F[\u1036]?)\u1037/g, function($0, $1)
   {
      return $1 ? $1 + '\u1094' : $0 + $1;
   }
   );
   hv986m2uConverter = hv986m2uConverter.replace (/(\u1030[\u1036]?)\u1037/g, function($0, $1)
   {
      return $1 ? $1 + '\u1094' : $0 + $1;
   }
   );
   hv986m2uConverter = hv986m2uConverter.replace (/(\u1014[\u103A\u1032]?)\u1037/g, function($0, $1)
   {
      return $1 ? $1 + '\u1094' : $0 + $1;
   }
   );
   hv986m2uConverter = hv986m2uConverter.replace (/(\u103B[\u1032\u1036]?)\u1037/g, function($0, $1)
   {
      return $1 ? $1 + '\u1095' : $0 + $1;
   }
   );

   hv986m2uConverter = hv986m2uConverter.replace (/(\u103D[\u1032]?)\u1037/g,  function($0, $1)
   {
      return $1 ? $1 + '\u1095' : $0 + $1;
   }
   );

   hv986m2uConverter = hv986m2uConverter.replace (/([\u103B\u103C\u103D][\u102D\u102E\u1032-\u1035\u1036\u109D]?)\u102F/g, function($0, $1)
   {
      return $1 ? $1 + '\u1033' : $0 + $1;
   }
   );
   
   hv986m2uConverter = hv986m2uConverter.replace (/((\u1039[\u1000-\u1021\u105A\u105C])[\u102D\u1036]?)\u102F/g,  function($0, $1)
   {
      return $1 ? $1 + '\u1033' : $0 + $1;
   }
   );
   hv986m2uConverter = hv986m2uConverter.replace (/([\u100A\u100C\u100D\u1020\u1025\u1029][\u102D\u102E\u1036\u109D\u1099]?)\u102F/g, function($0, $1)
   {
      return $1 ? $1 + '\u1033' : $0 + $1;
   }
   );
   hv986m2uConverter = hv986m2uConverter.replace (/([\u103B\u103C][\u103D]?[\u103E]?[\u102D\u1036]?)\u1030/g, function($0, $1)
   {
      return $1 ? $1 + '\u1034' : $0 + $1;

   }
   );
   // uu - 2
   hv986m2uConverter = hv986m2uConverter.replace (/((\u1039[\u1000-\u1021\u105A\u105C])[\u102D\u102E\u1035\u1098-\u109A\u109D]?)\u1030/g, function($0, $1)
   {
      return $1 ? $1 + '\u1034' : $0 + $1;

   }
   );
   // uu - 2
   hv986m2uConverter = hv986m2uConverter.replace (/([\u100A\u100C\u100D\u1022\u1020\u1025\u1029][\u102D\u102E\u1035\u1098-\u109A\u109D]?)\u1030/g, function($0, $1)
   {
      return $1 ? $1 + '\u1034' : $0 + $1;
   }
   );
   // uu - 2
   hv986m2uConverter = hv986m2uConverter.replace (/(\u103C)\u103E/g, function($0, $1)
   {
      return $1 ? $1 + '\u1087' : $0 + $1;
   }
   );
   // ha - 2
   hv986m2uConverter = hv986m2uConverter.replace (/([\u103E\u103F\u105B-\u105F\u109B-\u109C\u109E][\u102D\u102E\u1035\u1098-\u109A\u109D]?)\u102F/g, function($0, $1)
   {
      return $1 ? $1 + '\u1033' : $0 + $1;
   }
   ); //  Monreorder l
   
   hv986m2uConverter = hv986m2uConverter.replace (/((\u1039[\u1000-\u1021\u105A\u105C])[\u102D\u102E\u1098-\u109A\u109D]?)\u102F/g, function($0, $1)
   {
      return $1 ? $1 + '\u1034' : $0 + $1;
   }
   ); // Monreorder kwat+ll
   
   hv986m2uConverter = hv986m2uConverter.replace (/([\u100A\u100C\u100D\u1022\u1020\u1025\u1029][\u103E\u103F\u105B-\u105F]?)\u1030/g, function($0, $1)
   {
      return $1 ? $1 + '\u1034' : $0 + $1;
   }
   ); // Monreorder ll
   hv986m2uConverter = hv986m2uConverter.replace (/([\u103E\u103F\u105B-\u105F]?)\u1030/g, function($0, $1)
   {
      return $1 ? $1 + '\u1034' : $0 + $1;
   }
   ); // Monreorder Medai-Kwat + ll
   hv986m2uConverter = hv986m2uConverter.replace (/([\u1000-\u1021\u1050])([\u103E\u103F\u105B-\u105F])\u1031/g, '\u1031$1$2'); // U-media->hawaymu
   //hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u105C/g, '\u105E'); // K-r
   //hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u105C/g, '\u105E'); // K-BBA
   //hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1050/g, '\u105E'); // K-BBA
   //hv986m2uConverter = hv986m2uConverter.replace (/(\u1022)(\u1031)/g, '$2$1'); //  reorder-K-BbA
   hv986m2uConverter = hv986m2uConverter.replace (/\u1022\u102F/g, '\u1022\u1033'); // K-BbA
   hv986m2uConverter = hv986m2uConverter.replace (/\u1022\u1099\u102F/g, '\u1022\u1099\u1033'); // K-BbA-Aol`
   hv986m2uConverter = hv986m2uConverter.replace (/\u100F\u109C/g, '\u1091'); // KonDta
   hv986m2uConverter = hv986m2uConverter.replace (/\u1009(?=[\u103A])/g, '\u1025');
   hv986m2uConverter = hv986m2uConverter.replace (/\u1009(?=\u1039[\u1000-\u1021])/g, '\u1025');



   // E render
   hv986m2uConverter = hv986m2uConverter.replace ( /([\u1000-\u1022\u1029\u1050])(\u1039[\u1000-\u1021\u105A-\u105D\u105E])?([\u103B-\u103E\u1087]*)?\u1031/g, "\u1031$1$2$3");
  
   // Ra render

   hv986m2uConverter = hv986m2uConverter.replace ( /([\u1000-\u1021\u1029])(\u1039[\u1000-\u1021\u1000-\u1021])?(\u103C)/g, "$3$1$2");

   // Kinzi
   hv986m2uConverter = hv986m2uConverter.replace (/\u1004\u103A\u1039/g, "\u1064");
   
   // kinzi
   hv986m2uConverter = hv986m2uConverter.replace (/(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u102D/g, "$2$3$4\u108B");
   // reordering kinzi lgt
   hv986m2uConverter = hv986m2uConverter.replace (/(\u1064)(\u1031)?(\u103C)?([ \u1000-\u1021])\u102E/g, "$2$3$4\u108C");
   // reordering kinzi lgtsk
   hv986m2uConverter = hv986m2uConverter.replace (/(\u1064)(\u1031)?(\u103C)?([ \u1000-\u1021])\u1036/g, "$2$3$4\u108D");
   // reordering kinzi ttt
   hv986m2uConverter = hv986m2uConverter.replace (/(\u1064)(\u1031)?(\u103C)?([ \u1000-\u1021])/g, "$2$3$4\u1064");
   // reordering kinzi
   hv986m2uConverter = hv986m2uConverter.replace (/(\u1064)(\u1031)?(\u103C)?([ \u1000-\u1021\u1050])\u1098/g, "$2$3$4\u109A");
   // reordering kinzi Mon Eii
   hv986m2uConverter = hv986m2uConverter.replace (/\u1064\u1098/g, "\u109A"); // kinzi Mon ab-Eii
   // Consonant

   hv986m2uConverter = hv986m2uConverter.replace (/\u100A(?=[\u1039\u102F\u1030])/g, "\u106B");
   // nnya - 2
   hv986m2uConverter = hv986m2uConverter.replace (/\u100A/g, "\u100A");
   // nnya

   hv986m2uConverter = hv986m2uConverter.replace (/\u101B(?=[\u102F\u1030])/g, "\u1090");
   // ra - 2
   hv986m2uConverter = hv986m2uConverter.replace (/\u101B/g, "\u101B");
   // ra

   hv986m2uConverter = hv986m2uConverter.replace (/\u1014(?=[\u1039\u103D\u103E\u102F\u1030])/g, "\u108F");
   // na - 2
   hv986m2uConverter = hv986m2uConverter.replace (/\u1014/g, "\u1014");
   // na

   // Stacked consonants
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1000/g, "\u1060");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1001/g, "\u1061");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1002/g, "\u1062");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1003/g, "\u1063");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1005/g, "\u1065");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1006/g, "\u1066");
   // 1067
   hv986m2uConverter = hv986m2uConverter.replace (/([\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108F\u1015\u1016\u1017\u1019\u101D])\u1066/g, function($0, $1)
   {
      return $1 ? $1 + '\u1067' : $0 + $1;

   }
   );
   // 1067
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1007/g, "\u1068");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1008/g, "\u1069");

   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u100F/g, "\u1070");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1010/g, "\u1071");
   // 1072 omit (little shift to right)
   hv986m2uConverter = hv986m2uConverter.replace (/([\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108F\u1015\u1016\u1017\u1019\u101D])\u1071/g, function($0, $1)
   {
      return $1 ? $1 + '\u1072' : $0 + $1;

   }
   );
   // 1067
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1011/g, "\u1073");
   // \u1074 omit(little shift to right)
   hv986m2uConverter = hv986m2uConverter.replace (/([\u1001\u1002\u1004\u1005\u1007\u1012\u1013\u108F\u1015\u1016\u1017\u1019\u101D])\u1073/g, function($0, $1)
   {
      return $1 ? $1 + '\u1074' : $0 + $1;

   }
   );
   // 1067
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1012/g, "\u1075");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1013/g, "\u1076");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1014/g, "\u1077");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1015/g, "\u1078");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1016/g, "\u1079");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1017/g, "\u107A");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1018/g, "\u107B");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1019/g, "\u107C");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u101C/g, "\u1085");


   hv986m2uConverter = hv986m2uConverter.replace (/\u100F\u1039\u100D/g, "\u1091");
   hv986m2uConverter = hv986m2uConverter.replace (/\u100B\u1039\u100C/g, "\u1092");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u100C/g, "\u106D");
   hv986m2uConverter = hv986m2uConverter.replace (/\u100B\u1039\u100B/g, "\u1097");
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u100B/g, "\u106C");
   hv986m2uConverter = hv986m2uConverter.replace (/\u100D\u1039\u100E/g, "\u106F");
   hv986m2uConverter = hv986m2uConverter.replace (/\u100D\u1039\u100D/g, "\u106E");

   hv986m2uConverter = hv986m2uConverter.replace (/\u1009(?=\u103A)/g, "\u1025");
   // u
   hv986m2uConverter = hv986m2uConverter.replace (/\u1025(?=[\u1039\u102F\u1030])/g, "\u106A");
   // u - 2
   hv986m2uConverter = hv986m2uConverter.replace (/\u1025/g, "\u1025");
   // u
   /////////////////////////////////////

   hv986m2uConverter = hv986m2uConverter.replace (/\u103A/g, "\u1039");
   // asat

   hv986m2uConverter = hv986m2uConverter.replace (/\u103B\u103D\u103E/g, "\u107D\u108A");
   // ya wa ha
   hv986m2uConverter = hv986m2uConverter.replace (/\u103D\u103E/g, "\u108A");
   // wa ha

   hv986m2uConverter = hv986m2uConverter.replace (/\u103B/g, "\u103A");
   // ya
   hv986m2uConverter = hv986m2uConverter.replace (/\u103C/g, "\u103B");
   // ra
   hv986m2uConverter = hv986m2uConverter.replace (/\u103D/g, "\u103C");
   // wa
   hv986m2uConverter = hv986m2uConverter.replace (/\u103E/g, "\u103D");
   // ha
   
   hv986m2uConverter = hv986m2uConverter.replace (/\u105E/g, '\u103E'); // K-Na in
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u105C/g, '\u105E'); // K-r
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u105C/g, '\u105E'); // K-BBA
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1050/g, '\u105E'); // K-BBA
   hv986m2uConverter = hv986m2uConverter.replace (/\u1004\u105B\u105E/g, '\u1050'); // BBA
   hv986m2uConverter = hv986m2uConverter.replace (/\u103A(?=[\u103C\u103D\u108A])/g, "\u107D");
   // ya - 2

   hv986m2uConverter = hv986m2uConverter.replace (/(\u100A(?:[\u102D\u102E\u1036\u108B\u108C\u108D\u108E])?)\u103D/g, function($0, $1)
   {
      //      return $1 ? $1 + '\u1087 ' : $0 + $1;
      return $1 ? $1 + '\u1087' : $0 ;

   }
   );
   // ha - 2
   hv986m2uConverter = hv986m2uConverter.replace (/\u103B(?=[\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\u101E\u101F\u1021])/g, "\u107E");
   // great Ra with wide consonants
   hv986m2uConverter = hv986m2uConverter.replace (/\u107E([\u1000-\u1021\u108F])(?=[\u102D\u102E\u1036\u108B\u108C\u108D\u108E])/g, "\u1080$1");
   // great Ra with upper sign
   hv986m2uConverter = hv986m2uConverter.replace (/\u107E([\u1000-\u1021\u108F])(?=[\u103C\u108A])/g, "\u1082$1");
   // great Ra with under signs

   hv986m2uConverter = hv986m2uConverter.replace (/\u103B([\u1000-\u1021\u108F])(?=[\u102D \u102E \u1036 \u108B \u108C \u108D \u108E])/g, "\u107F$1");
   // little Ra with upper sign
   
   hv986m2uConverter = hv986m2uConverter.replace (/\u103B([\u1000-\u1021\u108F])(?=[\u102D \u102E \u1032 \u1035 \u1036 \u108B \u108C \u108D \u108E \u1098 \u109D])/g, "\u107F$1");
   // little Ra with under signs

   hv986m2uConverter = hv986m2uConverter.replace (/(\u1014[\u103A\u1032]?)\u1037/g, function($0, $1)
   {
      return $1 ? $1 + '\u1094' : $0 + $1;

   }
   );
   // aukmyint
   hv986m2uConverter = hv986m2uConverter.replace (/(\u1033[\u1036]?)\u1094/g, function($0, $1)
   {
      return $1 ? $1 + '\u1095' : $0 + $1;

   }
   );
   // aukmyint
   hv986m2uConverter = hv986m2uConverter.replace (/(\u1034[\u1036]?)\u1094/g, function($0, $1)
   {
      return $1 ? $1 + '\u1095' : $0 + $1;

   }
   );
   // aukmyint
   hv986m2uConverter = hv986m2uConverter.replace (/([\u103C\u103D\u108A][\u1032]?)\u1037/g, function($0, $1)
   {
      return $1 ? $1 + '\u1095' : $0 + $1;

   }
   );
   // aukmyint
    ////
   //// Illical Nga
   hv986m2uConverter = hv986m2uConverter.replace (/\u1004\u105B\u1039/g, '\u1004\u1039'); // Illical shit-Nga
   hv986m2uConverter = hv986m2uConverter.replace (/\u1039\u1004\u105B/g, '\u105B'); // Illical-recovery-kw-nga
   hv986m2uConverter = hv986m2uConverter.replace (/\u105B\u102C\u1039/g, '\u1039\u1004\u105B\u102C\u1039'); //Illical-recovery-kw-nga
   hv986m2uConverter = hv986m2uConverter.replace (/([\u1000-\u1022\u1050]?)\u1039\u1031\u1004\u105B/g, ' \u1031$1\u105B'); // Illical-recovery-kw-nga
   var Moncu = "\u1000-\u1021\u1050";
   var MonKz = "\u1064";
   hv986m2uConverter = hv986m2uConverter.replace (/\u1004\u1039(\u1060)/g, "\u1000"+ MonKz); // Illical shit-Nga
   hv986m2uConverter = hv986m2uConverter.replace (/\u1004\u1039(\u1061)/g, "\u1001"+ MonKz); // Illical shit-Nga
   hv986m2uConverter = hv986m2uConverter.replace (/\u1004\u1039(\u1062)/g, "\u1002"+ MonKz); // Illical shit-Nga
   hv986m2uConverter = hv986m2uConverter.replace (/\u1004\u1039(\u1063)/g, "\u1003"+ MonKz); // Illical shit-Nga
   hv986m2uConverter = hv986m2uConverter.replace (/\u1004\u1039(\u1065)/g, "\u1005"+ MonKz); // Illical shit-Nga
   hv986m2uConverter = hv986m2uConverter.replace (/\u1004\u1039(\u1066)/g, "\u1066"+ MonKz); // Illical shit-Nga
   hv986m2uConverter = hv986m2uConverter.replace (/\u1004\u1039(\u1067)/g, "\u1066"+ MonKz); // Illical shit-Nga
   
   //next for most MonKz
   hv986m2uConverter = hv986m2uConverter.replace (/\u2018\u2019/g, '\u201C'); // re-Quote
   hv986m2uConverter = hv986m2uConverter.replace (/([\u1000-\u1021\u1050])(\u103D)(\u1031)/g, '$3$1$2'); // jaikc
   
   return hv986m2uConverter;
}
// Uni_Mon
