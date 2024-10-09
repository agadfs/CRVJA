// Generated from AMOS.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AMOSListener from './AMOSListener.js';
const serializedATN = [4,1,92,619,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,1,0,1,0,1,0,5,0,118,8,0,10,0,12,0,121,9,0,1,1,1,1,1,1,5,1,126,8,1,10,
1,12,1,129,9,1,1,2,1,2,1,2,5,2,134,8,2,10,2,12,2,137,9,2,1,3,1,3,1,3,1,3,
1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,155,8,4,1,5,5,5,158,
8,5,10,5,12,5,161,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,
6,211,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,
10,1,10,1,10,1,10,1,10,1,10,3,10,234,8,10,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,12,1,12,5,12,245,8,12,10,12,12,12,248,9,12,1,12,1,12,1,12,1,12,1,
12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,3,14,263,8,14,1,14,1,14,1,14,
3,14,268,8,14,5,14,270,8,14,10,14,12,14,273,9,14,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,3,16,292,8,16,
1,16,3,16,295,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,306,
8,17,1,18,1,18,1,18,3,18,311,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,
19,335,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
1,20,1,20,3,20,351,8,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,3,22,360,8,22,
5,22,362,8,22,10,22,12,22,365,9,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,
25,1,26,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,1,31,
1,31,1,31,1,31,1,31,3,31,393,8,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,3,32,
402,8,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,3,33,411,8,33,1,33,1,33,1,33,
1,34,1,34,1,35,1,35,1,35,1,35,3,35,422,8,35,1,36,1,36,1,36,1,36,1,36,1,37,
1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,437,8,37,1,37,1,37,5,37,441,8,37,
10,37,12,37,444,9,37,1,37,3,37,447,8,37,1,38,1,38,1,38,1,38,3,38,453,8,38,
1,38,1,38,1,39,1,39,1,39,3,39,460,8,39,1,39,5,39,463,8,39,10,39,12,39,466,
9,39,1,40,1,40,1,40,1,40,1,40,3,40,473,8,40,1,40,1,40,1,40,1,40,1,41,1,41,
1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,
44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,5,46,506,8,46,10,46,
12,46,509,9,46,1,46,1,46,1,47,1,47,1,47,5,47,516,8,47,10,47,12,47,519,9,
47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,5,48,530,8,48,10,48,12,48,
533,9,48,1,48,1,48,1,48,3,48,538,8,48,1,49,1,49,1,49,1,49,1,49,5,49,545,
8,49,10,49,12,49,548,9,49,1,49,1,49,3,49,552,8,49,1,50,1,50,5,50,556,8,50,
10,50,12,50,559,9,50,1,50,1,50,1,51,1,51,1,51,5,51,566,8,51,10,51,12,51,
569,9,51,1,51,1,51,3,51,573,8,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,
1,52,1,53,1,53,1,53,1,53,3,53,588,8,53,1,53,1,53,5,53,592,8,53,10,53,12,
53,595,9,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,3,55,
608,8,55,1,56,1,56,1,56,1,56,5,56,614,8,56,10,56,12,56,617,9,56,1,56,2,271,
615,0,57,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,
94,96,98,100,102,104,106,108,110,112,0,6,1,0,85,86,1,0,83,84,2,0,47,47,74,
74,1,0,48,49,2,0,12,12,40,44,2,0,50,50,88,88,658,0,114,1,0,0,0,2,122,1,0,
0,0,4,130,1,0,0,0,6,138,1,0,0,0,8,154,1,0,0,0,10,159,1,0,0,0,12,210,1,0,
0,0,14,212,1,0,0,0,16,218,1,0,0,0,18,224,1,0,0,0,20,227,1,0,0,0,22,235,1,
0,0,0,24,242,1,0,0,0,26,255,1,0,0,0,28,259,1,0,0,0,30,274,1,0,0,0,32,288,
1,0,0,0,34,296,1,0,0,0,36,307,1,0,0,0,38,320,1,0,0,0,40,336,1,0,0,0,42,352,
1,0,0,0,44,355,1,0,0,0,46,366,1,0,0,0,48,369,1,0,0,0,50,372,1,0,0,0,52,374,
1,0,0,0,54,377,1,0,0,0,56,379,1,0,0,0,58,381,1,0,0,0,60,384,1,0,0,0,62,387,
1,0,0,0,64,396,1,0,0,0,66,405,1,0,0,0,68,415,1,0,0,0,70,417,1,0,0,0,72,423,
1,0,0,0,74,446,1,0,0,0,76,448,1,0,0,0,78,456,1,0,0,0,80,467,1,0,0,0,82,478,
1,0,0,0,84,489,1,0,0,0,86,491,1,0,0,0,88,493,1,0,0,0,90,496,1,0,0,0,92,503,
1,0,0,0,94,512,1,0,0,0,96,522,1,0,0,0,98,539,1,0,0,0,100,553,1,0,0,0,102,
562,1,0,0,0,104,574,1,0,0,0,106,583,1,0,0,0,108,598,1,0,0,0,110,607,1,0,
0,0,112,609,1,0,0,0,114,119,3,4,2,0,115,116,7,0,0,0,116,118,3,4,2,0,117,
115,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,1,1,0,0,
0,121,119,1,0,0,0,122,127,3,4,2,0,123,124,7,0,0,0,124,126,3,4,2,0,125,123,
1,0,0,0,126,129,1,0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,3,1,0,0,0,129,
127,1,0,0,0,130,135,3,8,4,0,131,132,7,1,0,0,132,134,3,8,4,0,133,131,1,0,
0,0,134,137,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,5,1,0,0,0,137,135,
1,0,0,0,138,139,5,74,0,0,139,140,5,76,0,0,140,141,3,2,1,0,141,142,5,77,0,
0,142,7,1,0,0,0,143,155,5,47,0,0,144,155,3,6,3,0,145,155,3,62,31,0,146,155,
3,64,32,0,147,155,5,74,0,0,148,149,5,76,0,0,149,150,3,2,1,0,150,151,5,77,
0,0,151,155,1,0,0,0,152,153,5,82,0,0,153,155,7,2,0,0,154,143,1,0,0,0,154,
144,1,0,0,0,154,145,1,0,0,0,154,146,1,0,0,0,154,147,1,0,0,0,154,148,1,0,
0,0,154,152,1,0,0,0,155,9,1,0,0,0,156,158,3,12,6,0,157,156,1,0,0,0,158,161,
1,0,0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,159,1,0,0,0,
162,163,5,0,0,1,163,11,1,0,0,0,164,211,3,106,53,0,165,211,3,82,41,0,166,
211,3,84,42,0,167,211,3,80,40,0,168,211,3,86,43,0,169,211,3,88,44,0,170,
211,3,90,45,0,171,211,3,92,46,0,172,211,3,96,48,0,173,211,3,102,51,0,174,
211,3,98,49,0,175,211,3,72,36,0,176,211,3,104,52,0,177,211,3,74,37,0,178,
211,3,70,35,0,179,211,3,94,47,0,180,211,3,68,34,0,181,211,3,66,33,0,182,
211,5,1,0,0,183,211,5,87,0,0,184,211,3,78,39,0,185,211,3,112,56,0,186,211,
3,58,29,0,187,211,3,60,30,0,188,211,3,56,28,0,189,211,3,54,27,0,190,211,
3,52,26,0,191,211,3,50,25,0,192,211,3,44,22,0,193,211,3,48,24,0,194,211,
3,46,23,0,195,211,3,42,21,0,196,211,3,36,18,0,197,211,3,38,19,0,198,211,
3,40,20,0,199,211,3,34,17,0,200,211,3,32,16,0,201,211,3,30,15,0,202,211,
3,28,14,0,203,211,3,26,13,0,204,211,3,24,12,0,205,211,3,22,11,0,206,211,
3,14,7,0,207,211,3,18,9,0,208,211,3,16,8,0,209,211,3,20,10,0,210,164,1,0,
0,0,210,165,1,0,0,0,210,166,1,0,0,0,210,167,1,0,0,0,210,168,1,0,0,0,210,
169,1,0,0,0,210,170,1,0,0,0,210,171,1,0,0,0,210,172,1,0,0,0,210,173,1,0,
0,0,210,174,1,0,0,0,210,175,1,0,0,0,210,176,1,0,0,0,210,177,1,0,0,0,210,
178,1,0,0,0,210,179,1,0,0,0,210,180,1,0,0,0,210,181,1,0,0,0,210,182,1,0,
0,0,210,183,1,0,0,0,210,184,1,0,0,0,210,185,1,0,0,0,210,186,1,0,0,0,210,
187,1,0,0,0,210,188,1,0,0,0,210,189,1,0,0,0,210,190,1,0,0,0,210,191,1,0,
0,0,210,192,1,0,0,0,210,193,1,0,0,0,210,194,1,0,0,0,210,195,1,0,0,0,210,
196,1,0,0,0,210,197,1,0,0,0,210,198,1,0,0,0,210,199,1,0,0,0,210,200,1,0,
0,0,210,201,1,0,0,0,210,202,1,0,0,0,210,203,1,0,0,0,210,204,1,0,0,0,210,
205,1,0,0,0,210,206,1,0,0,0,210,207,1,0,0,0,210,208,1,0,0,0,210,209,1,0,
0,0,211,13,1,0,0,0,212,213,5,2,0,0,213,214,5,3,0,0,214,215,5,47,0,0,215,
216,5,50,0,0,216,217,5,74,0,0,217,15,1,0,0,0,218,219,5,2,0,0,219,220,5,4,
0,0,220,221,5,47,0,0,221,222,5,50,0,0,222,223,5,74,0,0,223,17,1,0,0,0,224,
225,5,5,0,0,225,226,5,47,0,0,226,19,1,0,0,0,227,228,5,6,0,0,228,229,5,90,
0,0,229,230,5,47,0,0,230,231,5,50,0,0,231,233,5,74,0,0,232,234,5,82,0,0,
233,232,1,0,0,0,233,234,1,0,0,0,234,21,1,0,0,0,235,236,5,7,0,0,236,237,5,
76,0,0,237,238,3,2,1,0,238,239,5,50,0,0,239,240,3,2,1,0,240,241,5,77,0,0,
241,23,1,0,0,0,242,246,5,8,0,0,243,245,3,12,6,0,244,243,1,0,0,0,245,248,
1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,249,1,0,0,0,248,246,1,0,0,0,
249,250,5,9,0,0,250,251,5,10,0,0,251,252,5,11,0,0,252,253,5,12,0,0,253,254,
5,47,0,0,254,25,1,0,0,0,255,256,5,13,0,0,256,257,5,14,0,0,257,258,5,47,0,
0,258,27,1,0,0,0,259,262,5,15,0,0,260,263,3,76,38,0,261,263,5,74,0,0,262,
260,1,0,0,0,262,261,1,0,0,0,263,271,1,0,0,0,264,267,5,50,0,0,265,268,3,76,
38,0,266,268,5,74,0,0,267,265,1,0,0,0,267,266,1,0,0,0,268,270,1,0,0,0,269,
264,1,0,0,0,270,273,1,0,0,0,271,272,1,0,0,0,271,269,1,0,0,0,272,29,1,0,0,
0,273,271,1,0,0,0,274,275,5,16,0,0,275,276,5,17,0,0,276,277,3,2,1,0,277,
278,5,50,0,0,278,279,3,2,1,0,279,280,5,61,0,0,280,281,3,2,1,0,281,282,5,
50,0,0,282,283,3,2,1,0,283,284,5,50,0,0,284,285,3,2,1,0,285,286,5,50,0,0,
286,287,3,2,1,0,287,31,1,0,0,0,288,289,5,18,0,0,289,291,5,47,0,0,290,292,
5,50,0,0,291,290,1,0,0,0,291,292,1,0,0,0,292,294,1,0,0,0,293,295,5,47,0,
0,294,293,1,0,0,0,294,295,1,0,0,0,295,33,1,0,0,0,296,297,5,19,0,0,297,298,
5,74,0,0,298,299,5,50,0,0,299,305,3,2,1,0,300,301,5,50,0,0,301,302,3,2,1,
0,302,303,5,61,0,0,303,304,5,20,0,0,304,306,1,0,0,0,305,300,1,0,0,0,305,
306,1,0,0,0,306,35,1,0,0,0,307,308,5,21,0,0,308,310,5,22,0,0,309,311,5,23,
0,0,310,309,1,0,0,0,310,311,1,0,0,0,311,312,1,0,0,0,312,313,5,47,0,0,313,
314,5,50,0,0,314,315,5,47,0,0,315,316,5,61,0,0,316,317,5,47,0,0,317,318,
5,50,0,0,318,319,5,47,0,0,319,37,1,0,0,0,320,321,5,21,0,0,321,322,5,24,0,
0,322,323,5,47,0,0,323,324,5,50,0,0,324,334,5,47,0,0,325,326,5,50,0,0,326,
327,3,2,1,0,327,328,5,50,0,0,328,329,3,2,1,0,329,330,5,50,0,0,330,331,3,
2,1,0,331,332,5,50,0,0,332,333,3,2,1,0,333,335,1,0,0,0,334,325,1,0,0,0,334,
335,1,0,0,0,335,39,1,0,0,0,336,337,5,21,0,0,337,338,5,25,0,0,338,339,5,47,
0,0,339,340,5,50,0,0,340,350,5,47,0,0,341,342,5,50,0,0,342,343,3,2,1,0,343,
344,5,50,0,0,344,345,3,2,1,0,345,346,5,61,0,0,346,347,3,2,1,0,347,348,5,
50,0,0,348,349,3,2,1,0,349,351,1,0,0,0,350,341,1,0,0,0,350,351,1,0,0,0,351,
41,1,0,0,0,352,353,5,26,0,0,353,354,5,47,0,0,354,43,1,0,0,0,355,363,5,27,
0,0,356,357,5,82,0,0,357,359,7,2,0,0,358,360,5,50,0,0,359,358,1,0,0,0,359,
360,1,0,0,0,360,362,1,0,0,0,361,356,1,0,0,0,362,365,1,0,0,0,363,361,1,0,
0,0,363,364,1,0,0,0,364,45,1,0,0,0,365,363,1,0,0,0,366,367,5,28,0,0,367,
368,5,14,0,0,368,47,1,0,0,0,369,370,5,29,0,0,370,371,5,47,0,0,371,49,1,0,
0,0,372,373,5,30,0,0,373,51,1,0,0,0,374,375,5,31,0,0,375,376,5,47,0,0,376,
53,1,0,0,0,377,378,5,32,0,0,378,55,1,0,0,0,379,380,5,33,0,0,380,57,1,0,0,
0,381,382,5,34,0,0,382,383,5,35,0,0,383,59,1,0,0,0,384,385,5,34,0,0,385,
386,5,36,0,0,386,61,1,0,0,0,387,388,5,37,0,0,388,392,5,76,0,0,389,393,5,
47,0,0,390,393,5,74,0,0,391,393,3,2,1,0,392,389,1,0,0,0,392,390,1,0,0,0,
392,391,1,0,0,0,393,394,1,0,0,0,394,395,5,77,0,0,395,63,1,0,0,0,396,397,
5,38,0,0,397,401,5,76,0,0,398,402,5,47,0,0,399,402,5,74,0,0,400,402,3,2,
1,0,401,398,1,0,0,0,401,399,1,0,0,0,401,400,1,0,0,0,402,403,1,0,0,0,403,
404,5,77,0,0,404,65,1,0,0,0,405,410,5,68,0,0,406,407,5,82,0,0,407,411,5,
47,0,0,408,411,3,2,1,0,409,411,5,74,0,0,410,406,1,0,0,0,410,408,1,0,0,0,
410,409,1,0,0,0,411,412,1,0,0,0,412,413,5,50,0,0,413,414,5,47,0,0,414,67,
1,0,0,0,415,416,5,72,0,0,416,69,1,0,0,0,417,418,5,74,0,0,418,421,5,12,0,
0,419,422,3,22,11,0,420,422,3,2,1,0,421,419,1,0,0,0,421,420,1,0,0,0,422,
71,1,0,0,0,423,424,5,74,0,0,424,425,5,78,0,0,425,426,7,2,0,0,426,427,5,79,
0,0,427,73,1,0,0,0,428,429,5,74,0,0,429,430,5,78,0,0,430,431,3,2,1,0,431,
432,5,79,0,0,432,447,1,0,0,0,433,434,5,74,0,0,434,436,5,76,0,0,435,437,3,
2,1,0,436,435,1,0,0,0,436,437,1,0,0,0,437,442,1,0,0,0,438,439,5,50,0,0,439,
441,3,2,1,0,440,438,1,0,0,0,441,444,1,0,0,0,442,440,1,0,0,0,442,443,1,0,
0,0,443,445,1,0,0,0,444,442,1,0,0,0,445,447,5,77,0,0,446,428,1,0,0,0,446,
433,1,0,0,0,447,75,1,0,0,0,448,449,5,74,0,0,449,452,5,76,0,0,450,453,5,47,
0,0,451,453,3,2,1,0,452,450,1,0,0,0,452,451,1,0,0,0,453,454,1,0,0,0,454,
455,5,77,0,0,455,77,1,0,0,0,456,457,5,39,0,0,457,464,3,76,38,0,458,460,5,
50,0,0,459,458,1,0,0,0,459,460,1,0,0,0,460,461,1,0,0,0,461,463,3,76,38,0,
462,459,1,0,0,0,463,466,1,0,0,0,464,462,1,0,0,0,464,465,1,0,0,0,465,79,1,
0,0,0,466,464,1,0,0,0,467,468,5,74,0,0,468,472,5,76,0,0,469,473,5,47,0,0,
470,473,5,74,0,0,471,473,3,2,1,0,472,469,1,0,0,0,472,470,1,0,0,0,472,471,
1,0,0,0,473,474,1,0,0,0,474,475,5,77,0,0,475,476,5,12,0,0,476,477,3,2,1,
0,477,81,1,0,0,0,478,479,5,46,0,0,479,480,5,47,0,0,480,481,5,50,0,0,481,
482,5,47,0,0,482,483,5,50,0,0,483,484,5,47,0,0,484,485,5,50,0,0,485,486,
5,47,0,0,486,487,5,50,0,0,487,488,7,3,0,0,488,83,1,0,0,0,489,490,5,53,0,
0,490,85,1,0,0,0,491,492,5,54,0,0,492,87,1,0,0,0,493,494,5,55,0,0,494,495,
5,47,0,0,495,89,1,0,0,0,496,497,5,56,0,0,497,498,5,47,0,0,498,499,5,50,0,
0,499,500,5,47,0,0,500,501,5,50,0,0,501,502,5,57,0,0,502,91,1,0,0,0,503,
507,5,58,0,0,504,506,3,12,6,0,505,504,1,0,0,0,506,509,1,0,0,0,507,505,1,
0,0,0,507,508,1,0,0,0,508,510,1,0,0,0,509,507,1,0,0,0,510,511,5,59,0,0,511,
93,1,0,0,0,512,513,5,66,0,0,513,517,3,108,54,0,514,516,3,12,6,0,515,514,
1,0,0,0,516,519,1,0,0,0,517,515,1,0,0,0,517,518,1,0,0,0,518,520,1,0,0,0,
519,517,1,0,0,0,520,521,5,67,0,0,521,95,1,0,0,0,522,523,5,60,0,0,523,524,
5,74,0,0,524,525,5,12,0,0,525,526,5,47,0,0,526,527,5,61,0,0,527,531,5,47,
0,0,528,530,3,12,6,0,529,528,1,0,0,0,530,533,1,0,0,0,531,529,1,0,0,0,531,
532,1,0,0,0,532,537,1,0,0,0,533,531,1,0,0,0,534,535,5,62,0,0,535,538,5,74,
0,0,536,538,5,62,0,0,537,534,1,0,0,0,537,536,1,0,0,0,538,97,1,0,0,0,539,
540,5,63,0,0,540,541,3,2,1,0,541,542,7,4,0,0,542,546,3,0,0,0,543,545,3,12,
6,0,544,543,1,0,0,0,545,548,1,0,0,0,546,544,1,0,0,0,546,547,1,0,0,0,547,
551,1,0,0,0,548,546,1,0,0,0,549,552,3,100,50,0,550,552,5,65,0,0,551,549,
1,0,0,0,551,550,1,0,0,0,552,99,1,0,0,0,553,557,5,64,0,0,554,556,3,12,6,0,
555,554,1,0,0,0,556,559,1,0,0,0,557,555,1,0,0,0,557,558,1,0,0,0,558,560,
1,0,0,0,559,557,1,0,0,0,560,561,5,65,0,0,561,101,1,0,0,0,562,563,5,63,0,
0,563,567,3,108,54,0,564,566,3,12,6,0,565,564,1,0,0,0,566,569,1,0,0,0,567,
565,1,0,0,0,567,568,1,0,0,0,568,572,1,0,0,0,569,567,1,0,0,0,570,573,3,100,
50,0,571,573,5,65,0,0,572,570,1,0,0,0,572,571,1,0,0,0,573,103,1,0,0,0,574,
575,5,71,0,0,575,576,3,2,1,0,576,577,5,50,0,0,577,578,3,0,0,0,578,579,5,
61,0,0,579,580,3,2,1,0,580,581,5,50,0,0,581,582,3,0,0,0,582,105,1,0,0,0,
583,584,5,69,0,0,584,585,5,74,0,0,585,587,5,78,0,0,586,588,5,74,0,0,587,
586,1,0,0,0,587,588,1,0,0,0,588,589,1,0,0,0,589,593,5,79,0,0,590,592,3,12,
6,0,591,590,1,0,0,0,592,595,1,0,0,0,593,591,1,0,0,0,593,594,1,0,0,0,594,
596,1,0,0,0,595,593,1,0,0,0,596,597,5,70,0,0,597,107,1,0,0,0,598,599,5,73,
0,0,599,600,5,76,0,0,600,601,3,2,1,0,601,602,5,77,0,0,602,109,1,0,0,0,603,
608,3,2,1,0,604,608,5,57,0,0,605,606,5,90,0,0,606,608,5,47,0,0,607,603,1,
0,0,0,607,604,1,0,0,0,607,605,1,0,0,0,608,111,1,0,0,0,609,610,5,45,0,0,610,
615,3,110,55,0,611,612,7,5,0,0,612,614,3,110,55,0,613,611,1,0,0,0,614,617,
1,0,0,0,615,616,1,0,0,0,615,613,1,0,0,0,616,113,1,0,0,0,617,615,1,0,0,0,
43,119,127,135,154,159,210,233,246,262,267,271,291,294,305,310,334,350,359,
363,392,401,410,421,436,442,446,452,459,464,472,507,517,531,537,546,551,
557,567,572,587,593,607,615];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AMOSParser extends antlr4.Parser {

    static grammarFileName = "AMOS.g4";
    static literalNames = [ null, "'End'", "'Open'", "'Out'", "'In'", "'Close'", 
                            "'Input'", "'Btst'", "'Repeat'", "'Until'", 
                            "'Mouse'", "'Key'", "'='", "'Set'", "'Buffer'", 
                            "'Global'", "'Turbo'", "'Draw'", "'Locate'", 
                            "'Add'", "'NUMBER'", "'Blitter'", "'Copy'", 
                            "'Limit'", "'Fill'", "'Clear'", "'Autoback'", 
                            "'Palette'", "'Double'", "'Pen'", "'Cls'", "'Paper'", 
                            "'Degree'", "'Hide'", "'Flash'", "'Off'", "'On'", 
                            "'Sin'", "'Cos'", "'Dim'", "'<>'", "'>='", "'>'", 
                            "'<='", "'<'", "'Print'", "'Screen Open'", null, 
                            "'Lowres'", "'Hires'", "','", null, null, "'Curs Off'", 
                            "'Curs On'", "'Ink'", "'Text'", null, "'Do'", 
                            "'Loop'", "'For'", "'To'", "'Next'", "'If'", 
                            "'Else'", "'End If'", "'While'", "'Wend'", "'Play'", 
                            "'Procedure'", "'End Proc'", "'Bar'", "'Wait Key'", 
                            "'Key State'", null, null, "'('", "')'", "'['", 
                            "']'", "'{'", "'}'", "'$'", "'*'", "'/'", "'+'", 
                            "'-'", "':'", "';'", "'.'", "'#'", "'%'", "'?'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "SCREENOPEN", 
                             "NUMBER", "LOWRES", "HIRES", "COMMA", "COMMENT", 
                             "WS", "CURSOFF", "CURSON", "INK", "TEXT", "STRING", 
                             "DO", "LOOP", "FOR", "TO", "NEXT", "IF", "ELSE", 
                             "ENDIF", "WHILE", "WEND", "PLAY", "PROC", "ENDPROC", 
                             "BAR", "WAITKEY", "KEYSTATE", "IDENTIFIER", 
                             "COMPARISON", "BRACKETOPEN_PROP", "BRACKETCLOSE_PROP", 
                             "BRACKETOPEN_ARRAY", "BRACKETCLOSE_ARRAY", 
                             "BRACKETOPEN_FUNCTION", "BRACKETCLOSE_FUNCTION", 
                             "HECADECIMAL", "MULTIPLY", "DIVIDE", "ADD", 
                             "SUBTRACT", "STATEMENT_SEPARATOR", "FINISH_AND_ADD_OTHER_STATEMENT", 
                             "DOT", "HASHTAG", "PERCENT", "QUESTION" ];
    static ruleNames = [ "expression2", "expression1", "term", "array_index_get", 
                         "factor", "program", "statement", "open_out_readfile", 
                         "open_in_writefile", "close_file", "input_variable", 
                         "btst", "repeat_key", "set_buffer", "global", "turbo_draw", 
                         "locate", "add", "blitter_copy", "blitter_fill", 
                         "blitter_clear", "autoback", "palette", "double_buffer", 
                         "pen", "cls", "paper", "degree", "hide", "flash_off", 
                         "flash_on", "sin_function", "cos_function", "play_sound", 
                         "wait_key_break", "variable_starter", "function_starter", 
                         "function_call_or_array_access", "array_structure", 
                         "array_create", "array_update", "screen_open", 
                         "curs_off", "curs_on", "ink", "text", "do_loop", 
                         "while_wend", "for_loop", "if_statement", "else_statement", 
                         "if_statement_key_state", "bar", "procedure", "current_Key_State", 
                         "print_options", "print_something" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AMOSParser.ruleNames;
        this.literalNames = AMOSParser.literalNames;
        this.symbolicNames = AMOSParser.symbolicNames;
    }



	expression2() {
	    let localctx = new Expression2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AMOSParser.RULE_expression2);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.term();
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85 || _la===86) {
	            this.state = 115;
	            _la = this._input.LA(1);
	            if(!(_la===85 || _la===86)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 116;
	            this.term();
	            this.state = 121;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression1() {
	    let localctx = new Expression1Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AMOSParser.RULE_expression1);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.term();
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85 || _la===86) {
	            this.state = 123;
	            _la = this._input.LA(1);
	            if(!(_la===85 || _la===86)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 124;
	            this.term();
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AMOSParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.factor();
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===83 || _la===84) {
	            this.state = 131;
	            _la = this._input.LA(1);
	            if(!(_la===83 || _la===84)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 132;
	            this.factor();
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_index_get() {
	    let localctx = new Array_index_getContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AMOSParser.RULE_array_index_get);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 139;
	        this.match(AMOSParser.BRACKETOPEN_PROP);

	        this.state = 140;
	        this.expression1();
	        this.state = 141;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AMOSParser.RULE_factor);
	    var _la = 0;
	    try {
	        this.state = 154;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            this.match(AMOSParser.NUMBER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 144;
	            this.array_index_get();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 145;
	            this.sin_function();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 146;
	            this.cos_function();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 147;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 148;
	            this.match(AMOSParser.BRACKETOPEN_PROP);
	            this.state = 149;
	            this.expression1();
	            this.state = 150;
	            this.match(AMOSParser.BRACKETCLOSE_PROP);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 152;
	            this.match(AMOSParser.HECADECIMAL);
	            this.state = 153;
	            _la = this._input.LA(1);
	            if(!(_la===47 || _la===74)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AMOSParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230848998) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2514509959) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 2097517) !== 0)) {
	            this.state = 156;
	            this.statement();
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 162;
	        this.match(AMOSParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AMOSParser.RULE_statement);
	    try {
	        this.state = 210;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.procedure();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.screen_open();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 166;
	            this.curs_off();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 167;
	            this.array_update();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 168;
	            this.curs_on();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 169;
	            this.ink();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 170;
	            this.text();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 171;
	            this.do_loop();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 172;
	            this.for_loop();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 173;
	            this.if_statement_key_state();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 174;
	            this.if_statement();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 175;
	            this.function_starter();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 176;
	            this.bar();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 177;
	            this.function_call_or_array_access();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 178;
	            this.variable_starter();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 179;
	            this.while_wend();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 180;
	            this.wait_key_break();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 181;
	            this.play_sound();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 182;
	            this.match(AMOSParser.T__0);
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 183;
	            this.match(AMOSParser.STATEMENT_SEPARATOR);
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 184;
	            this.array_create();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 185;
	            this.print_something();
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 186;
	            this.flash_off();
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 187;
	            this.flash_on();
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 188;
	            this.hide();
	            break;

	        case 26:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 189;
	            this.degree();
	            break;

	        case 27:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 190;
	            this.paper();
	            break;

	        case 28:
	            this.enterOuterAlt(localctx, 28);
	            this.state = 191;
	            this.cls();
	            break;

	        case 29:
	            this.enterOuterAlt(localctx, 29);
	            this.state = 192;
	            this.palette();
	            break;

	        case 30:
	            this.enterOuterAlt(localctx, 30);
	            this.state = 193;
	            this.pen();
	            break;

	        case 31:
	            this.enterOuterAlt(localctx, 31);
	            this.state = 194;
	            this.double_buffer();
	            break;

	        case 32:
	            this.enterOuterAlt(localctx, 32);
	            this.state = 195;
	            this.autoback();
	            break;

	        case 33:
	            this.enterOuterAlt(localctx, 33);
	            this.state = 196;
	            this.blitter_copy();
	            break;

	        case 34:
	            this.enterOuterAlt(localctx, 34);
	            this.state = 197;
	            this.blitter_fill();
	            break;

	        case 35:
	            this.enterOuterAlt(localctx, 35);
	            this.state = 198;
	            this.blitter_clear();
	            break;

	        case 36:
	            this.enterOuterAlt(localctx, 36);
	            this.state = 199;
	            this.add();
	            break;

	        case 37:
	            this.enterOuterAlt(localctx, 37);
	            this.state = 200;
	            this.locate();
	            break;

	        case 38:
	            this.enterOuterAlt(localctx, 38);
	            this.state = 201;
	            this.turbo_draw();
	            break;

	        case 39:
	            this.enterOuterAlt(localctx, 39);
	            this.state = 202;
	            this.global();
	            break;

	        case 40:
	            this.enterOuterAlt(localctx, 40);
	            this.state = 203;
	            this.set_buffer();
	            break;

	        case 41:
	            this.enterOuterAlt(localctx, 41);
	            this.state = 204;
	            this.repeat_key();
	            break;

	        case 42:
	            this.enterOuterAlt(localctx, 42);
	            this.state = 205;
	            this.btst();
	            break;

	        case 43:
	            this.enterOuterAlt(localctx, 43);
	            this.state = 206;
	            this.open_out_readfile();
	            break;

	        case 44:
	            this.enterOuterAlt(localctx, 44);
	            this.state = 207;
	            this.close_file();
	            break;

	        case 45:
	            this.enterOuterAlt(localctx, 45);
	            this.state = 208;
	            this.open_in_writefile();
	            break;

	        case 46:
	            this.enterOuterAlt(localctx, 46);
	            this.state = 209;
	            this.input_variable();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	open_out_readfile() {
	    let localctx = new Open_out_readfileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AMOSParser.RULE_open_out_readfile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(AMOSParser.T__1);
	        this.state = 213;
	        this.match(AMOSParser.T__2);
	        this.state = 214;
	        this.match(AMOSParser.NUMBER);
	        this.state = 215;
	        this.match(AMOSParser.COMMA);
	        this.state = 216;
	        this.match(AMOSParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	open_in_writefile() {
	    let localctx = new Open_in_writefileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AMOSParser.RULE_open_in_writefile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.match(AMOSParser.T__1);
	        this.state = 219;
	        this.match(AMOSParser.T__3);
	        this.state = 220;
	        this.match(AMOSParser.NUMBER);
	        this.state = 221;
	        this.match(AMOSParser.COMMA);
	        this.state = 222;
	        this.match(AMOSParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	close_file() {
	    let localctx = new Close_fileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, AMOSParser.RULE_close_file);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.match(AMOSParser.T__4);
	        this.state = 225;
	        this.match(AMOSParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	input_variable() {
	    let localctx = new Input_variableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, AMOSParser.RULE_input_variable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.match(AMOSParser.T__5);
	        this.state = 228;
	        this.match(AMOSParser.HASHTAG);
	        this.state = 229;
	        this.match(AMOSParser.NUMBER);
	        this.state = 230;
	        this.match(AMOSParser.COMMA);
	        this.state = 231;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 233;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===82) {
	            this.state = 232;
	            this.match(AMOSParser.HECADECIMAL);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	btst() {
	    let localctx = new BtstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, AMOSParser.RULE_btst);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(AMOSParser.T__6);
	        this.state = 236;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 237;
	        this.expression1();
	        this.state = 238;
	        this.match(AMOSParser.COMMA);
	        this.state = 239;
	        this.expression1();
	        this.state = 240;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeat_key() {
	    let localctx = new Repeat_keyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, AMOSParser.RULE_repeat_key);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(AMOSParser.T__7);
	        this.state = 246;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230848998) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2514509959) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 2097517) !== 0)) {
	            this.state = 243;
	            this.statement();
	            this.state = 248;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 249;
	        this.match(AMOSParser.T__8);
	        this.state = 250;
	        this.match(AMOSParser.T__9);
	        this.state = 251;
	        this.match(AMOSParser.T__10);
	        this.state = 252;
	        this.match(AMOSParser.T__11);
	        this.state = 253;
	        this.match(AMOSParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	set_buffer() {
	    let localctx = new Set_bufferContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, AMOSParser.RULE_set_buffer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.match(AMOSParser.T__12);
	        this.state = 256;
	        this.match(AMOSParser.T__13);
	        this.state = 257;
	        this.match(AMOSParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	global() {
	    let localctx = new GlobalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, AMOSParser.RULE_global);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.match(AMOSParser.T__14);
	        this.state = 262;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 260;
	            this.array_structure();
	            break;

	        case 2:
	            this.state = 261;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        }
	        this.state = 271;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 264;
	                this.match(AMOSParser.COMMA);
	                this.state = 267;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 265;
	                    this.array_structure();
	                    break;

	                case 2:
	                    this.state = 266;
	                    this.match(AMOSParser.IDENTIFIER);
	                    break;

	                } 
	            }
	            this.state = 273;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	turbo_draw() {
	    let localctx = new Turbo_drawContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, AMOSParser.RULE_turbo_draw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(AMOSParser.T__15);
	        this.state = 275;
	        this.match(AMOSParser.T__16);
	        this.state = 276;
	        this.expression1();
	        this.state = 277;
	        this.match(AMOSParser.COMMA);
	        this.state = 278;
	        this.expression1();
	        this.state = 279;
	        this.match(AMOSParser.TO);
	        this.state = 280;
	        this.expression1();
	        this.state = 281;
	        this.match(AMOSParser.COMMA);
	        this.state = 282;
	        this.expression1();
	        this.state = 283;
	        this.match(AMOSParser.COMMA);
	        this.state = 284;
	        this.expression1();
	        this.state = 285;
	        this.match(AMOSParser.COMMA);
	        this.state = 286;
	        this.expression1();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	locate() {
	    let localctx = new LocateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, AMOSParser.RULE_locate);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.match(AMOSParser.T__17);
	        this.state = 289;
	        this.match(AMOSParser.NUMBER);
	        this.state = 291;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===50) {
	            this.state = 290;
	            this.match(AMOSParser.COMMA);
	        }

	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===47) {
	            this.state = 293;
	            this.match(AMOSParser.NUMBER);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	add() {
	    let localctx = new AddContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, AMOSParser.RULE_add);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(AMOSParser.T__18);
	        this.state = 297;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 298;
	        this.match(AMOSParser.COMMA);
	        this.state = 299;
	        this.expression1();
	        this.state = 305;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===50) {
	            this.state = 300;
	            this.match(AMOSParser.COMMA);
	            this.state = 301;
	            this.expression1();
	            this.state = 302;
	            this.match(AMOSParser.TO);
	            this.state = 303;
	            this.match(AMOSParser.T__19);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blitter_copy() {
	    let localctx = new Blitter_copyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, AMOSParser.RULE_blitter_copy);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(AMOSParser.T__20);
	        this.state = 308;
	        this.match(AMOSParser.T__21);
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 309;
	            this.match(AMOSParser.T__22);
	        }

	        this.state = 312;
	        this.match(AMOSParser.NUMBER);
	        this.state = 313;
	        this.match(AMOSParser.COMMA);
	        this.state = 314;
	        this.match(AMOSParser.NUMBER);
	        this.state = 315;
	        this.match(AMOSParser.TO);
	        this.state = 316;
	        this.match(AMOSParser.NUMBER);
	        this.state = 317;
	        this.match(AMOSParser.COMMA);
	        this.state = 318;
	        this.match(AMOSParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blitter_fill() {
	    let localctx = new Blitter_fillContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, AMOSParser.RULE_blitter_fill);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.match(AMOSParser.T__20);
	        this.state = 321;
	        this.match(AMOSParser.T__23);
	        this.state = 322;
	        this.match(AMOSParser.NUMBER);
	        this.state = 323;
	        this.match(AMOSParser.COMMA);
	        this.state = 324;
	        this.match(AMOSParser.NUMBER);
	        this.state = 334;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===50) {
	            this.state = 325;
	            this.match(AMOSParser.COMMA);
	            this.state = 326;
	            this.expression1();
	            this.state = 327;
	            this.match(AMOSParser.COMMA);
	            this.state = 328;
	            this.expression1();
	            this.state = 329;
	            this.match(AMOSParser.COMMA);
	            this.state = 330;
	            this.expression1();
	            this.state = 331;
	            this.match(AMOSParser.COMMA);
	            this.state = 332;
	            this.expression1();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blitter_clear() {
	    let localctx = new Blitter_clearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, AMOSParser.RULE_blitter_clear);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.match(AMOSParser.T__20);
	        this.state = 337;
	        this.match(AMOSParser.T__24);
	        this.state = 338;
	        this.match(AMOSParser.NUMBER);
	        this.state = 339;
	        this.match(AMOSParser.COMMA);
	        this.state = 340;
	        this.match(AMOSParser.NUMBER);
	        this.state = 350;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===50) {
	            this.state = 341;
	            this.match(AMOSParser.COMMA);
	            this.state = 342;
	            this.expression1();
	            this.state = 343;
	            this.match(AMOSParser.COMMA);
	            this.state = 344;
	            this.expression1();
	            this.state = 345;
	            this.match(AMOSParser.TO);
	            this.state = 346;
	            this.expression1();
	            this.state = 347;
	            this.match(AMOSParser.COMMA);
	            this.state = 348;
	            this.expression1();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	autoback() {
	    let localctx = new AutobackContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, AMOSParser.RULE_autoback);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.match(AMOSParser.T__25);
	        this.state = 353;
	        this.match(AMOSParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	palette() {
	    let localctx = new PaletteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, AMOSParser.RULE_palette);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(AMOSParser.T__26);
	        this.state = 363;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===82) {
	            this.state = 356;
	            this.match(AMOSParser.HECADECIMAL);
	            this.state = 357;
	            _la = this._input.LA(1);
	            if(!(_la===47 || _la===74)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 359;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===50) {
	                this.state = 358;
	                this.match(AMOSParser.COMMA);
	            }

	            this.state = 365;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	double_buffer() {
	    let localctx = new Double_bufferContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, AMOSParser.RULE_double_buffer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 366;
	        this.match(AMOSParser.T__27);
	        this.state = 367;
	        this.match(AMOSParser.T__13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pen() {
	    let localctx = new PenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, AMOSParser.RULE_pen);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.match(AMOSParser.T__28);
	        this.state = 370;
	        this.match(AMOSParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cls() {
	    let localctx = new ClsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, AMOSParser.RULE_cls);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this.match(AMOSParser.T__29);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paper() {
	    let localctx = new PaperContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, AMOSParser.RULE_paper);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 374;
	        this.match(AMOSParser.T__30);
	        this.state = 375;
	        this.match(AMOSParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	degree() {
	    let localctx = new DegreeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, AMOSParser.RULE_degree);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(AMOSParser.T__31);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hide() {
	    let localctx = new HideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, AMOSParser.RULE_hide);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(AMOSParser.T__32);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	flash_off() {
	    let localctx = new Flash_offContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, AMOSParser.RULE_flash_off);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 381;
	        this.match(AMOSParser.T__33);
	        this.state = 382;
	        this.match(AMOSParser.T__34);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	flash_on() {
	    let localctx = new Flash_onContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, AMOSParser.RULE_flash_on);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.match(AMOSParser.T__33);
	        this.state = 385;
	        this.match(AMOSParser.T__35);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sin_function() {
	    let localctx = new Sin_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, AMOSParser.RULE_sin_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
	        this.match(AMOSParser.T__36);
	        this.state = 388;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 392;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 389;
	            this.match(AMOSParser.NUMBER);
	            break;

	        case 2:
	            this.state = 390;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        case 3:
	            this.state = 391;
	            this.expression1();
	            break;

	        }
	        this.state = 394;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cos_function() {
	    let localctx = new Cos_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, AMOSParser.RULE_cos_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(AMOSParser.T__37);
	        this.state = 397;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 401;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 398;
	            this.match(AMOSParser.NUMBER);
	            break;

	        case 2:
	            this.state = 399;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        case 3:
	            this.state = 400;
	            this.expression1();
	            break;

	        }
	        this.state = 403;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	play_sound() {
	    let localctx = new Play_soundContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, AMOSParser.RULE_play_sound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        this.match(AMOSParser.PLAY);
	        this.state = 410;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 406;
	            this.match(AMOSParser.HECADECIMAL);
	            this.state = 407;
	            this.match(AMOSParser.NUMBER);
	            break;

	        case 2:
	            this.state = 408;
	            this.expression1();
	            break;

	        case 3:
	            this.state = 409;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        }
	        this.state = 412;
	        this.match(AMOSParser.COMMA);
	        this.state = 413;
	        this.match(AMOSParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wait_key_break() {
	    let localctx = new Wait_key_breakContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, AMOSParser.RULE_wait_key_break);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this.match(AMOSParser.WAITKEY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable_starter() {
	    let localctx = new Variable_starterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, AMOSParser.RULE_variable_starter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 417;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 418;
	        this.match(AMOSParser.T__11);
	        this.state = 421;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.state = 419;
	            this.btst();
	            break;
	        case 37:
	        case 38:
	        case 47:
	        case 74:
	        case 76:
	        case 82:
	            this.state = 420;
	            this.expression1();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_starter() {
	    let localctx = new Function_starterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, AMOSParser.RULE_function_starter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 423;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 424;
	        this.match(AMOSParser.BRACKETOPEN_ARRAY);
	        this.state = 425;
	        _la = this._input.LA(1);
	        if(!(_la===47 || _la===74)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 426;
	        this.match(AMOSParser.BRACKETCLOSE_ARRAY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_call_or_array_access() {
	    let localctx = new Function_call_or_array_accessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, AMOSParser.RULE_function_call_or_array_access);
	    var _la = 0;
	    try {
	        this.state = 446;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 428;
	            this.match(AMOSParser.IDENTIFIER);
	            this.state = 429;
	            this.match(AMOSParser.BRACKETOPEN_ARRAY);
	            this.state = 430;
	            this.expression1();
	            this.state = 431;
	            this.match(AMOSParser.BRACKETCLOSE_ARRAY);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 433;
	            this.match(AMOSParser.IDENTIFIER);
	            this.state = 434;
	            this.match(AMOSParser.BRACKETOPEN_PROP);
	            this.state = 436;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 1027) !== 0) || ((((_la - 74)) & ~0x1f) === 0 && ((1 << (_la - 74)) & 261) !== 0)) {
	                this.state = 435;
	                this.expression1();
	            }

	            this.state = 442;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===50) {
	                this.state = 438;
	                this.match(AMOSParser.COMMA);
	                this.state = 439;
	                this.expression1();
	                this.state = 444;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 445;
	            this.match(AMOSParser.BRACKETCLOSE_PROP);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_structure() {
	    let localctx = new Array_structureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, AMOSParser.RULE_array_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 449;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 452;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 450;
	            this.match(AMOSParser.NUMBER);
	            break;

	        case 2:
	            this.state = 451;
	            this.expression1();
	            break;

	        }
	        this.state = 454;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_create() {
	    let localctx = new Array_createContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, AMOSParser.RULE_array_create);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 456;
	        this.match(AMOSParser.T__38);
	        this.state = 457;
	        this.array_structure();
	        this.state = 464;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 459;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===50) {
	                    this.state = 458;
	                    this.match(AMOSParser.COMMA);
	                }

	                this.state = 461;
	                this.array_structure(); 
	            }
	            this.state = 466;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_update() {
	    let localctx = new Array_updateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, AMOSParser.RULE_array_update);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 467;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 468;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 472;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 469;
	            this.match(AMOSParser.NUMBER);
	            break;

	        case 2:
	            this.state = 470;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        case 3:
	            this.state = 471;
	            this.expression1();
	            break;

	        }
	        this.state = 474;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	        this.state = 475;
	        this.match(AMOSParser.T__11);
	        this.state = 476;
	        this.expression1();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	screen_open() {
	    let localctx = new Screen_openContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, AMOSParser.RULE_screen_open);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 478;
	        this.match(AMOSParser.SCREENOPEN);
	        this.state = 479;
	        this.match(AMOSParser.NUMBER);
	        this.state = 480;
	        this.match(AMOSParser.COMMA);
	        this.state = 481;
	        this.match(AMOSParser.NUMBER);
	        this.state = 482;
	        this.match(AMOSParser.COMMA);
	        this.state = 483;
	        this.match(AMOSParser.NUMBER);
	        this.state = 484;
	        this.match(AMOSParser.COMMA);
	        this.state = 485;
	        this.match(AMOSParser.NUMBER);
	        this.state = 486;
	        this.match(AMOSParser.COMMA);
	        this.state = 487;
	        _la = this._input.LA(1);
	        if(!(_la===48 || _la===49)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	curs_off() {
	    let localctx = new Curs_offContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, AMOSParser.RULE_curs_off);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 489;
	        this.match(AMOSParser.CURSOFF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	curs_on() {
	    let localctx = new Curs_onContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, AMOSParser.RULE_curs_on);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 491;
	        this.match(AMOSParser.CURSON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ink() {
	    let localctx = new InkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, AMOSParser.RULE_ink);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 493;
	        this.match(AMOSParser.INK);
	        this.state = 494;
	        this.match(AMOSParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, AMOSParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 496;
	        this.match(AMOSParser.TEXT);
	        this.state = 497;
	        this.match(AMOSParser.NUMBER);
	        this.state = 498;
	        this.match(AMOSParser.COMMA);
	        this.state = 499;
	        this.match(AMOSParser.NUMBER);
	        this.state = 500;
	        this.match(AMOSParser.COMMA);
	        this.state = 501;
	        this.match(AMOSParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	do_loop() {
	    let localctx = new Do_loopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, AMOSParser.RULE_do_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 503;
	        this.match(AMOSParser.DO);
	        this.state = 507;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230848998) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2514509959) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 2097517) !== 0)) {
	            this.state = 504;
	            this.statement();
	            this.state = 509;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 510;
	        this.match(AMOSParser.LOOP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	while_wend() {
	    let localctx = new While_wendContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, AMOSParser.RULE_while_wend);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 512;
	        this.match(AMOSParser.WHILE);
	        this.state = 513;
	        this.current_Key_State();
	        this.state = 517;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230848998) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2514509959) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 2097517) !== 0)) {
	            this.state = 514;
	            this.statement();
	            this.state = 519;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 520;
	        this.match(AMOSParser.WEND);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	for_loop() {
	    let localctx = new For_loopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, AMOSParser.RULE_for_loop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 522;
	        this.match(AMOSParser.FOR);
	        this.state = 523;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 524;
	        this.match(AMOSParser.T__11);
	        this.state = 525;
	        this.match(AMOSParser.NUMBER);
	        this.state = 526;
	        this.match(AMOSParser.TO);
	        this.state = 527;
	        this.match(AMOSParser.NUMBER);
	        this.state = 531;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230848998) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2514509959) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 2097517) !== 0)) {
	            this.state = 528;
	            this.statement();
	            this.state = 533;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 537;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 534;
	            this.match(AMOSParser.NEXT);
	            this.state = 535;
	            this.match(AMOSParser.IDENTIFIER);
	            break;

	        case 2:
	            this.state = 536;
	            this.match(AMOSParser.NEXT);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_statement() {
	    let localctx = new If_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, AMOSParser.RULE_if_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 539;
	        this.match(AMOSParser.IF);
	        this.state = 540;
	        this.expression1();
	        this.state = 541;
	        _la = this._input.LA(1);
	        if(!(_la===12 || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 31) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 542;
	        this.expression2();
	        this.state = 546;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230848998) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2514509959) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 2097517) !== 0)) {
	            this.state = 543;
	            this.statement();
	            this.state = 548;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 551;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 64:
	            this.state = 549;
	            this.else_statement();
	            break;
	        case 65:
	            this.state = 550;
	            this.match(AMOSParser.ENDIF);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	else_statement() {
	    let localctx = new Else_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, AMOSParser.RULE_else_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 553;
	        this.match(AMOSParser.ELSE);
	        this.state = 557;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230848998) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2514509959) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 2097517) !== 0)) {
	            this.state = 554;
	            this.statement();
	            this.state = 559;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 560;
	        this.match(AMOSParser.ENDIF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_statement_key_state() {
	    let localctx = new If_statement_key_stateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, AMOSParser.RULE_if_statement_key_state);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 562;
	        this.match(AMOSParser.IF);
	        this.state = 563;
	        this.current_Key_State();
	        this.state = 567;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230848998) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2514509959) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 2097517) !== 0)) {
	            this.state = 564;
	            this.statement();
	            this.state = 569;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 572;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 64:
	            this.state = 570;
	            this.else_statement();
	            break;
	        case 65:
	            this.state = 571;
	            this.match(AMOSParser.ENDIF);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bar() {
	    let localctx = new BarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, AMOSParser.RULE_bar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 574;
	        this.match(AMOSParser.BAR);
	        this.state = 575;
	        this.expression1();
	        this.state = 576;
	        this.match(AMOSParser.COMMA);
	        this.state = 577;
	        this.expression2();
	        this.state = 578;
	        this.match(AMOSParser.TO);
	        this.state = 579;
	        this.expression1();
	        this.state = 580;
	        this.match(AMOSParser.COMMA);
	        this.state = 581;
	        this.expression2();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedure() {
	    let localctx = new ProcedureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, AMOSParser.RULE_procedure);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        this.match(AMOSParser.PROC);
	        this.state = 584;
	        this.match(AMOSParser.IDENTIFIER);
	        this.state = 585;
	        this.match(AMOSParser.BRACKETOPEN_ARRAY);
	        this.state = 587;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===74) {
	            this.state = 586;
	            this.match(AMOSParser.IDENTIFIER);
	        }

	        this.state = 589;
	        this.match(AMOSParser.BRACKETCLOSE_ARRAY);
	        this.state = 593;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4230848998) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2514509959) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 2097517) !== 0)) {
	            this.state = 590;
	            this.statement();
	            this.state = 595;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 596;
	        this.match(AMOSParser.ENDPROC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	current_Key_State() {
	    let localctx = new Current_Key_StateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, AMOSParser.RULE_current_Key_State);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 598;
	        this.match(AMOSParser.KEYSTATE);
	        this.state = 599;
	        this.match(AMOSParser.BRACKETOPEN_PROP);
	        this.state = 600;
	        this.expression1();
	        this.state = 601;
	        this.match(AMOSParser.BRACKETCLOSE_PROP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	print_options() {
	    let localctx = new Print_optionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, AMOSParser.RULE_print_options);
	    try {
	        this.state = 607;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 37:
	        case 38:
	        case 47:
	        case 74:
	        case 76:
	        case 82:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 603;
	            this.expression1();
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 604;
	            this.match(AMOSParser.STRING);
	            break;
	        case 90:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 605;
	            this.match(AMOSParser.HASHTAG);
	            this.state = 606;
	            this.match(AMOSParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	print_something() {
	    let localctx = new Print_somethingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, AMOSParser.RULE_print_something);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 609;
	        this.match(AMOSParser.T__44);
	        this.state = 610;
	        this.print_options();
	        this.state = 615;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 611;
	                _la = this._input.LA(1);
	                if(!(_la===50 || _la===88)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 612;
	                this.print_options(); 
	            }
	            this.state = 617;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AMOSParser.EOF = antlr4.Token.EOF;
AMOSParser.T__0 = 1;
AMOSParser.T__1 = 2;
AMOSParser.T__2 = 3;
AMOSParser.T__3 = 4;
AMOSParser.T__4 = 5;
AMOSParser.T__5 = 6;
AMOSParser.T__6 = 7;
AMOSParser.T__7 = 8;
AMOSParser.T__8 = 9;
AMOSParser.T__9 = 10;
AMOSParser.T__10 = 11;
AMOSParser.T__11 = 12;
AMOSParser.T__12 = 13;
AMOSParser.T__13 = 14;
AMOSParser.T__14 = 15;
AMOSParser.T__15 = 16;
AMOSParser.T__16 = 17;
AMOSParser.T__17 = 18;
AMOSParser.T__18 = 19;
AMOSParser.T__19 = 20;
AMOSParser.T__20 = 21;
AMOSParser.T__21 = 22;
AMOSParser.T__22 = 23;
AMOSParser.T__23 = 24;
AMOSParser.T__24 = 25;
AMOSParser.T__25 = 26;
AMOSParser.T__26 = 27;
AMOSParser.T__27 = 28;
AMOSParser.T__28 = 29;
AMOSParser.T__29 = 30;
AMOSParser.T__30 = 31;
AMOSParser.T__31 = 32;
AMOSParser.T__32 = 33;
AMOSParser.T__33 = 34;
AMOSParser.T__34 = 35;
AMOSParser.T__35 = 36;
AMOSParser.T__36 = 37;
AMOSParser.T__37 = 38;
AMOSParser.T__38 = 39;
AMOSParser.T__39 = 40;
AMOSParser.T__40 = 41;
AMOSParser.T__41 = 42;
AMOSParser.T__42 = 43;
AMOSParser.T__43 = 44;
AMOSParser.T__44 = 45;
AMOSParser.SCREENOPEN = 46;
AMOSParser.NUMBER = 47;
AMOSParser.LOWRES = 48;
AMOSParser.HIRES = 49;
AMOSParser.COMMA = 50;
AMOSParser.COMMENT = 51;
AMOSParser.WS = 52;
AMOSParser.CURSOFF = 53;
AMOSParser.CURSON = 54;
AMOSParser.INK = 55;
AMOSParser.TEXT = 56;
AMOSParser.STRING = 57;
AMOSParser.DO = 58;
AMOSParser.LOOP = 59;
AMOSParser.FOR = 60;
AMOSParser.TO = 61;
AMOSParser.NEXT = 62;
AMOSParser.IF = 63;
AMOSParser.ELSE = 64;
AMOSParser.ENDIF = 65;
AMOSParser.WHILE = 66;
AMOSParser.WEND = 67;
AMOSParser.PLAY = 68;
AMOSParser.PROC = 69;
AMOSParser.ENDPROC = 70;
AMOSParser.BAR = 71;
AMOSParser.WAITKEY = 72;
AMOSParser.KEYSTATE = 73;
AMOSParser.IDENTIFIER = 74;
AMOSParser.COMPARISON = 75;
AMOSParser.BRACKETOPEN_PROP = 76;
AMOSParser.BRACKETCLOSE_PROP = 77;
AMOSParser.BRACKETOPEN_ARRAY = 78;
AMOSParser.BRACKETCLOSE_ARRAY = 79;
AMOSParser.BRACKETOPEN_FUNCTION = 80;
AMOSParser.BRACKETCLOSE_FUNCTION = 81;
AMOSParser.HECADECIMAL = 82;
AMOSParser.MULTIPLY = 83;
AMOSParser.DIVIDE = 84;
AMOSParser.ADD = 85;
AMOSParser.SUBTRACT = 86;
AMOSParser.STATEMENT_SEPARATOR = 87;
AMOSParser.FINISH_AND_ADD_OTHER_STATEMENT = 88;
AMOSParser.DOT = 89;
AMOSParser.HASHTAG = 90;
AMOSParser.PERCENT = 91;
AMOSParser.QUESTION = 92;

AMOSParser.RULE_expression2 = 0;
AMOSParser.RULE_expression1 = 1;
AMOSParser.RULE_term = 2;
AMOSParser.RULE_array_index_get = 3;
AMOSParser.RULE_factor = 4;
AMOSParser.RULE_program = 5;
AMOSParser.RULE_statement = 6;
AMOSParser.RULE_open_out_readfile = 7;
AMOSParser.RULE_open_in_writefile = 8;
AMOSParser.RULE_close_file = 9;
AMOSParser.RULE_input_variable = 10;
AMOSParser.RULE_btst = 11;
AMOSParser.RULE_repeat_key = 12;
AMOSParser.RULE_set_buffer = 13;
AMOSParser.RULE_global = 14;
AMOSParser.RULE_turbo_draw = 15;
AMOSParser.RULE_locate = 16;
AMOSParser.RULE_add = 17;
AMOSParser.RULE_blitter_copy = 18;
AMOSParser.RULE_blitter_fill = 19;
AMOSParser.RULE_blitter_clear = 20;
AMOSParser.RULE_autoback = 21;
AMOSParser.RULE_palette = 22;
AMOSParser.RULE_double_buffer = 23;
AMOSParser.RULE_pen = 24;
AMOSParser.RULE_cls = 25;
AMOSParser.RULE_paper = 26;
AMOSParser.RULE_degree = 27;
AMOSParser.RULE_hide = 28;
AMOSParser.RULE_flash_off = 29;
AMOSParser.RULE_flash_on = 30;
AMOSParser.RULE_sin_function = 31;
AMOSParser.RULE_cos_function = 32;
AMOSParser.RULE_play_sound = 33;
AMOSParser.RULE_wait_key_break = 34;
AMOSParser.RULE_variable_starter = 35;
AMOSParser.RULE_function_starter = 36;
AMOSParser.RULE_function_call_or_array_access = 37;
AMOSParser.RULE_array_structure = 38;
AMOSParser.RULE_array_create = 39;
AMOSParser.RULE_array_update = 40;
AMOSParser.RULE_screen_open = 41;
AMOSParser.RULE_curs_off = 42;
AMOSParser.RULE_curs_on = 43;
AMOSParser.RULE_ink = 44;
AMOSParser.RULE_text = 45;
AMOSParser.RULE_do_loop = 46;
AMOSParser.RULE_while_wend = 47;
AMOSParser.RULE_for_loop = 48;
AMOSParser.RULE_if_statement = 49;
AMOSParser.RULE_else_statement = 50;
AMOSParser.RULE_if_statement_key_state = 51;
AMOSParser.RULE_bar = 52;
AMOSParser.RULE_procedure = 53;
AMOSParser.RULE_current_Key_State = 54;
AMOSParser.RULE_print_options = 55;
AMOSParser.RULE_print_something = 56;

class Expression2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_expression2;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.ADD);
	    } else {
	        return this.getToken(AMOSParser.ADD, i);
	    }
	};


	SUBTRACT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.SUBTRACT);
	    } else {
	        return this.getToken(AMOSParser.SUBTRACT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterExpression2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitExpression2(this);
		}
	}


}



class Expression1Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_expression1;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.ADD);
	    } else {
	        return this.getToken(AMOSParser.ADD, i);
	    }
	};


	SUBTRACT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.SUBTRACT);
	    } else {
	        return this.getToken(AMOSParser.SUBTRACT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterExpression1(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitExpression1(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	MULTIPLY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.MULTIPLY);
	    } else {
	        return this.getToken(AMOSParser.MULTIPLY, i);
	    }
	};


	DIVIDE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.DIVIDE);
	    } else {
	        return this.getToken(AMOSParser.DIVIDE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitTerm(this);
		}
	}


}



class Array_index_getContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_array_index_get;
    }

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterArray_index_get(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitArray_index_get(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_factor;
    }

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	array_index_get() {
	    return this.getTypedRuleContext(Array_index_getContext,0);
	};

	sin_function() {
	    return this.getTypedRuleContext(Sin_functionContext,0);
	};

	cos_function() {
	    return this.getTypedRuleContext(Cos_functionContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	HECADECIMAL() {
	    return this.getToken(AMOSParser.HECADECIMAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitFactor(this);
		}
	}


}



class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_program;
    }

	EOF() {
	    return this.getToken(AMOSParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_statement;
    }

	procedure() {
	    return this.getTypedRuleContext(ProcedureContext,0);
	};

	screen_open() {
	    return this.getTypedRuleContext(Screen_openContext,0);
	};

	curs_off() {
	    return this.getTypedRuleContext(Curs_offContext,0);
	};

	array_update() {
	    return this.getTypedRuleContext(Array_updateContext,0);
	};

	curs_on() {
	    return this.getTypedRuleContext(Curs_onContext,0);
	};

	ink() {
	    return this.getTypedRuleContext(InkContext,0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	do_loop() {
	    return this.getTypedRuleContext(Do_loopContext,0);
	};

	for_loop() {
	    return this.getTypedRuleContext(For_loopContext,0);
	};

	if_statement_key_state() {
	    return this.getTypedRuleContext(If_statement_key_stateContext,0);
	};

	if_statement() {
	    return this.getTypedRuleContext(If_statementContext,0);
	};

	function_starter() {
	    return this.getTypedRuleContext(Function_starterContext,0);
	};

	bar() {
	    return this.getTypedRuleContext(BarContext,0);
	};

	function_call_or_array_access() {
	    return this.getTypedRuleContext(Function_call_or_array_accessContext,0);
	};

	variable_starter() {
	    return this.getTypedRuleContext(Variable_starterContext,0);
	};

	while_wend() {
	    return this.getTypedRuleContext(While_wendContext,0);
	};

	wait_key_break() {
	    return this.getTypedRuleContext(Wait_key_breakContext,0);
	};

	play_sound() {
	    return this.getTypedRuleContext(Play_soundContext,0);
	};

	STATEMENT_SEPARATOR() {
	    return this.getToken(AMOSParser.STATEMENT_SEPARATOR, 0);
	};

	array_create() {
	    return this.getTypedRuleContext(Array_createContext,0);
	};

	print_something() {
	    return this.getTypedRuleContext(Print_somethingContext,0);
	};

	flash_off() {
	    return this.getTypedRuleContext(Flash_offContext,0);
	};

	flash_on() {
	    return this.getTypedRuleContext(Flash_onContext,0);
	};

	hide() {
	    return this.getTypedRuleContext(HideContext,0);
	};

	degree() {
	    return this.getTypedRuleContext(DegreeContext,0);
	};

	paper() {
	    return this.getTypedRuleContext(PaperContext,0);
	};

	cls() {
	    return this.getTypedRuleContext(ClsContext,0);
	};

	palette() {
	    return this.getTypedRuleContext(PaletteContext,0);
	};

	pen() {
	    return this.getTypedRuleContext(PenContext,0);
	};

	double_buffer() {
	    return this.getTypedRuleContext(Double_bufferContext,0);
	};

	autoback() {
	    return this.getTypedRuleContext(AutobackContext,0);
	};

	blitter_copy() {
	    return this.getTypedRuleContext(Blitter_copyContext,0);
	};

	blitter_fill() {
	    return this.getTypedRuleContext(Blitter_fillContext,0);
	};

	blitter_clear() {
	    return this.getTypedRuleContext(Blitter_clearContext,0);
	};

	add() {
	    return this.getTypedRuleContext(AddContext,0);
	};

	locate() {
	    return this.getTypedRuleContext(LocateContext,0);
	};

	turbo_draw() {
	    return this.getTypedRuleContext(Turbo_drawContext,0);
	};

	global() {
	    return this.getTypedRuleContext(GlobalContext,0);
	};

	set_buffer() {
	    return this.getTypedRuleContext(Set_bufferContext,0);
	};

	repeat_key() {
	    return this.getTypedRuleContext(Repeat_keyContext,0);
	};

	btst() {
	    return this.getTypedRuleContext(BtstContext,0);
	};

	open_out_readfile() {
	    return this.getTypedRuleContext(Open_out_readfileContext,0);
	};

	close_file() {
	    return this.getTypedRuleContext(Close_fileContext,0);
	};

	open_in_writefile() {
	    return this.getTypedRuleContext(Open_in_writefileContext,0);
	};

	input_variable() {
	    return this.getTypedRuleContext(Input_variableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Open_out_readfileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_open_out_readfile;
    }

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	COMMA() {
	    return this.getToken(AMOSParser.COMMA, 0);
	};

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterOpen_out_readfile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitOpen_out_readfile(this);
		}
	}


}



class Open_in_writefileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_open_in_writefile;
    }

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	COMMA() {
	    return this.getToken(AMOSParser.COMMA, 0);
	};

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterOpen_in_writefile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitOpen_in_writefile(this);
		}
	}


}



class Close_fileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_close_file;
    }

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterClose_file(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitClose_file(this);
		}
	}


}



class Input_variableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_input_variable;
    }

	HASHTAG() {
	    return this.getToken(AMOSParser.HASHTAG, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	COMMA() {
	    return this.getToken(AMOSParser.COMMA, 0);
	};

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	HECADECIMAL() {
	    return this.getToken(AMOSParser.HECADECIMAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterInput_variable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitInput_variable(this);
		}
	}


}



class BtstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_btst;
    }

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	expression1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression1Context);
	    } else {
	        return this.getTypedRuleContext(Expression1Context,i);
	    }
	};

	COMMA() {
	    return this.getToken(AMOSParser.COMMA, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterBtst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitBtst(this);
		}
	}


}



class Repeat_keyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_repeat_key;
    }

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterRepeat_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitRepeat_key(this);
		}
	}


}



class Set_bufferContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_set_buffer;
    }

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterSet_buffer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitSet_buffer(this);
		}
	}


}



class GlobalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_global;
    }

	array_structure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Array_structureContext);
	    } else {
	        return this.getTypedRuleContext(Array_structureContext,i);
	    }
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.IDENTIFIER);
	    } else {
	        return this.getToken(AMOSParser.IDENTIFIER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterGlobal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitGlobal(this);
		}
	}


}



class Turbo_drawContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_turbo_draw;
    }

	expression1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression1Context);
	    } else {
	        return this.getTypedRuleContext(Expression1Context,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	TO() {
	    return this.getToken(AMOSParser.TO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterTurbo_draw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitTurbo_draw(this);
		}
	}


}



class LocateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_locate;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	COMMA() {
	    return this.getToken(AMOSParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterLocate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitLocate(this);
		}
	}


}



class AddContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_add;
    }

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	expression1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression1Context);
	    } else {
	        return this.getTypedRuleContext(Expression1Context,i);
	    }
	};

	TO() {
	    return this.getToken(AMOSParser.TO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterAdd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitAdd(this);
		}
	}


}



class Blitter_copyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_blitter_copy;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	TO() {
	    return this.getToken(AMOSParser.TO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterBlitter_copy(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitBlitter_copy(this);
		}
	}


}



class Blitter_fillContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_blitter_fill;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	expression1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression1Context);
	    } else {
	        return this.getTypedRuleContext(Expression1Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterBlitter_fill(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitBlitter_fill(this);
		}
	}


}



class Blitter_clearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_blitter_clear;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	expression1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression1Context);
	    } else {
	        return this.getTypedRuleContext(Expression1Context,i);
	    }
	};

	TO() {
	    return this.getToken(AMOSParser.TO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterBlitter_clear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitBlitter_clear(this);
		}
	}


}



class AutobackContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_autoback;
    }

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterAutoback(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitAutoback(this);
		}
	}


}



class PaletteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_palette;
    }

	HECADECIMAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.HECADECIMAL);
	    } else {
	        return this.getToken(AMOSParser.HECADECIMAL, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.IDENTIFIER);
	    } else {
	        return this.getToken(AMOSParser.IDENTIFIER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterPalette(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitPalette(this);
		}
	}


}



class Double_bufferContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_double_buffer;
    }


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterDouble_buffer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitDouble_buffer(this);
		}
	}


}



class PenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_pen;
    }

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterPen(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitPen(this);
		}
	}


}



class ClsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_cls;
    }


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterCls(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitCls(this);
		}
	}


}



class PaperContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_paper;
    }

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterPaper(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitPaper(this);
		}
	}


}



class DegreeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_degree;
    }


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterDegree(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitDegree(this);
		}
	}


}



class HideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_hide;
    }


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterHide(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitHide(this);
		}
	}


}



class Flash_offContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_flash_off;
    }


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterFlash_off(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitFlash_off(this);
		}
	}


}



class Flash_onContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_flash_on;
    }


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterFlash_on(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitFlash_on(this);
		}
	}


}



class Sin_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_sin_function;
    }

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterSin_function(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitSin_function(this);
		}
	}


}



class Cos_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_cos_function;
    }

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterCos_function(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitCos_function(this);
		}
	}


}



class Play_soundContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_play_sound;
    }

	PLAY() {
	    return this.getToken(AMOSParser.PLAY, 0);
	};

	COMMA() {
	    return this.getToken(AMOSParser.COMMA, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	HECADECIMAL() {
	    return this.getToken(AMOSParser.HECADECIMAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterPlay_sound(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitPlay_sound(this);
		}
	}


}



class Wait_key_breakContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_wait_key_break;
    }

	WAITKEY() {
	    return this.getToken(AMOSParser.WAITKEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterWait_key_break(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitWait_key_break(this);
		}
	}


}



class Variable_starterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_variable_starter;
    }

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	btst() {
	    return this.getTypedRuleContext(BtstContext,0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterVariable_starter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitVariable_starter(this);
		}
	}


}



class Function_starterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_function_starter;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.IDENTIFIER);
	    } else {
	        return this.getToken(AMOSParser.IDENTIFIER, i);
	    }
	};


	BRACKETOPEN_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETOPEN_ARRAY, 0);
	};

	BRACKETCLOSE_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_ARRAY, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterFunction_starter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitFunction_starter(this);
		}
	}


}



class Function_call_or_array_accessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_function_call_or_array_access;
    }

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	BRACKETOPEN_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETOPEN_ARRAY, 0);
	};

	expression1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression1Context);
	    } else {
	        return this.getTypedRuleContext(Expression1Context,i);
	    }
	};

	BRACKETCLOSE_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_ARRAY, 0);
	};

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterFunction_call_or_array_access(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitFunction_call_or_array_access(this);
		}
	}


}



class Array_structureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_array_structure;
    }

	IDENTIFIER() {
	    return this.getToken(AMOSParser.IDENTIFIER, 0);
	};

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterArray_structure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitArray_structure(this);
		}
	}


}



class Array_createContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_array_create;
    }

	array_structure = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Array_structureContext);
	    } else {
	        return this.getTypedRuleContext(Array_structureContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterArray_create(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitArray_create(this);
		}
	}


}



class Array_updateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_array_update;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.IDENTIFIER);
	    } else {
	        return this.getToken(AMOSParser.IDENTIFIER, i);
	    }
	};


	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	expression1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression1Context);
	    } else {
	        return this.getTypedRuleContext(Expression1Context,i);
	    }
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterArray_update(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitArray_update(this);
		}
	}


}



class Screen_openContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_screen_open;
    }

	SCREENOPEN() {
	    return this.getToken(AMOSParser.SCREENOPEN, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	LOWRES() {
	    return this.getToken(AMOSParser.LOWRES, 0);
	};

	HIRES() {
	    return this.getToken(AMOSParser.HIRES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterScreen_open(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitScreen_open(this);
		}
	}


}



class Curs_offContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_curs_off;
    }

	CURSOFF() {
	    return this.getToken(AMOSParser.CURSOFF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterCurs_off(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitCurs_off(this);
		}
	}


}



class Curs_onContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_curs_on;
    }

	CURSON() {
	    return this.getToken(AMOSParser.CURSON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterCurs_on(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitCurs_on(this);
		}
	}


}



class InkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_ink;
    }

	INK() {
	    return this.getToken(AMOSParser.INK, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterInk(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitInk(this);
		}
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_text;
    }

	TEXT() {
	    return this.getToken(AMOSParser.TEXT, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	STRING() {
	    return this.getToken(AMOSParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitText(this);
		}
	}


}



class Do_loopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_do_loop;
    }

	DO() {
	    return this.getToken(AMOSParser.DO, 0);
	};

	LOOP() {
	    return this.getToken(AMOSParser.LOOP, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterDo_loop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitDo_loop(this);
		}
	}


}



class While_wendContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_while_wend;
    }

	WHILE() {
	    return this.getToken(AMOSParser.WHILE, 0);
	};

	current_Key_State() {
	    return this.getTypedRuleContext(Current_Key_StateContext,0);
	};

	WEND() {
	    return this.getToken(AMOSParser.WEND, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterWhile_wend(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitWhile_wend(this);
		}
	}


}



class For_loopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_for_loop;
    }

	FOR() {
	    return this.getToken(AMOSParser.FOR, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.IDENTIFIER);
	    } else {
	        return this.getToken(AMOSParser.IDENTIFIER, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.NUMBER);
	    } else {
	        return this.getToken(AMOSParser.NUMBER, i);
	    }
	};


	TO() {
	    return this.getToken(AMOSParser.TO, 0);
	};

	NEXT() {
	    return this.getToken(AMOSParser.NEXT, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterFor_loop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitFor_loop(this);
		}
	}


}



class If_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_if_statement;
    }

	IF() {
	    return this.getToken(AMOSParser.IF, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	expression2() {
	    return this.getTypedRuleContext(Expression2Context,0);
	};

	else_statement() {
	    return this.getTypedRuleContext(Else_statementContext,0);
	};

	ENDIF() {
	    return this.getToken(AMOSParser.ENDIF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterIf_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitIf_statement(this);
		}
	}


}



class Else_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_else_statement;
    }

	ELSE() {
	    return this.getToken(AMOSParser.ELSE, 0);
	};

	ENDIF() {
	    return this.getToken(AMOSParser.ENDIF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterElse_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitElse_statement(this);
		}
	}


}



class If_statement_key_stateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_if_statement_key_state;
    }

	IF() {
	    return this.getToken(AMOSParser.IF, 0);
	};

	current_Key_State() {
	    return this.getTypedRuleContext(Current_Key_StateContext,0);
	};

	else_statement() {
	    return this.getTypedRuleContext(Else_statementContext,0);
	};

	ENDIF() {
	    return this.getToken(AMOSParser.ENDIF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterIf_statement_key_state(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitIf_statement_key_state(this);
		}
	}


}



class BarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_bar;
    }

	BAR() {
	    return this.getToken(AMOSParser.BAR, 0);
	};

	expression1 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression1Context);
	    } else {
	        return this.getTypedRuleContext(Expression1Context,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	expression2 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression2Context);
	    } else {
	        return this.getTypedRuleContext(Expression2Context,i);
	    }
	};

	TO() {
	    return this.getToken(AMOSParser.TO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterBar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitBar(this);
		}
	}


}



class ProcedureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_procedure;
    }

	PROC() {
	    return this.getToken(AMOSParser.PROC, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.IDENTIFIER);
	    } else {
	        return this.getToken(AMOSParser.IDENTIFIER, i);
	    }
	};


	BRACKETOPEN_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETOPEN_ARRAY, 0);
	};

	BRACKETCLOSE_ARRAY() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_ARRAY, 0);
	};

	ENDPROC() {
	    return this.getToken(AMOSParser.ENDPROC, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterProcedure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitProcedure(this);
		}
	}


}



class Current_Key_StateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_current_Key_State;
    }

	KEYSTATE() {
	    return this.getToken(AMOSParser.KEYSTATE, 0);
	};

	BRACKETOPEN_PROP() {
	    return this.getToken(AMOSParser.BRACKETOPEN_PROP, 0);
	};

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	BRACKETCLOSE_PROP() {
	    return this.getToken(AMOSParser.BRACKETCLOSE_PROP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterCurrent_Key_State(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitCurrent_Key_State(this);
		}
	}


}



class Print_optionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_print_options;
    }

	expression1() {
	    return this.getTypedRuleContext(Expression1Context,0);
	};

	STRING() {
	    return this.getToken(AMOSParser.STRING, 0);
	};

	HASHTAG() {
	    return this.getToken(AMOSParser.HASHTAG, 0);
	};

	NUMBER() {
	    return this.getToken(AMOSParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterPrint_options(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitPrint_options(this);
		}
	}


}



class Print_somethingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AMOSParser.RULE_print_something;
    }

	print_options = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Print_optionsContext);
	    } else {
	        return this.getTypedRuleContext(Print_optionsContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.COMMA);
	    } else {
	        return this.getToken(AMOSParser.COMMA, i);
	    }
	};


	FINISH_AND_ADD_OTHER_STATEMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AMOSParser.FINISH_AND_ADD_OTHER_STATEMENT);
	    } else {
	        return this.getToken(AMOSParser.FINISH_AND_ADD_OTHER_STATEMENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.enterPrint_something(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AMOSListener ) {
	        listener.exitPrint_something(this);
		}
	}


}




AMOSParser.Expression2Context = Expression2Context; 
AMOSParser.Expression1Context = Expression1Context; 
AMOSParser.TermContext = TermContext; 
AMOSParser.Array_index_getContext = Array_index_getContext; 
AMOSParser.FactorContext = FactorContext; 
AMOSParser.ProgramContext = ProgramContext; 
AMOSParser.StatementContext = StatementContext; 
AMOSParser.Open_out_readfileContext = Open_out_readfileContext; 
AMOSParser.Open_in_writefileContext = Open_in_writefileContext; 
AMOSParser.Close_fileContext = Close_fileContext; 
AMOSParser.Input_variableContext = Input_variableContext; 
AMOSParser.BtstContext = BtstContext; 
AMOSParser.Repeat_keyContext = Repeat_keyContext; 
AMOSParser.Set_bufferContext = Set_bufferContext; 
AMOSParser.GlobalContext = GlobalContext; 
AMOSParser.Turbo_drawContext = Turbo_drawContext; 
AMOSParser.LocateContext = LocateContext; 
AMOSParser.AddContext = AddContext; 
AMOSParser.Blitter_copyContext = Blitter_copyContext; 
AMOSParser.Blitter_fillContext = Blitter_fillContext; 
AMOSParser.Blitter_clearContext = Blitter_clearContext; 
AMOSParser.AutobackContext = AutobackContext; 
AMOSParser.PaletteContext = PaletteContext; 
AMOSParser.Double_bufferContext = Double_bufferContext; 
AMOSParser.PenContext = PenContext; 
AMOSParser.ClsContext = ClsContext; 
AMOSParser.PaperContext = PaperContext; 
AMOSParser.DegreeContext = DegreeContext; 
AMOSParser.HideContext = HideContext; 
AMOSParser.Flash_offContext = Flash_offContext; 
AMOSParser.Flash_onContext = Flash_onContext; 
AMOSParser.Sin_functionContext = Sin_functionContext; 
AMOSParser.Cos_functionContext = Cos_functionContext; 
AMOSParser.Play_soundContext = Play_soundContext; 
AMOSParser.Wait_key_breakContext = Wait_key_breakContext; 
AMOSParser.Variable_starterContext = Variable_starterContext; 
AMOSParser.Function_starterContext = Function_starterContext; 
AMOSParser.Function_call_or_array_accessContext = Function_call_or_array_accessContext; 
AMOSParser.Array_structureContext = Array_structureContext; 
AMOSParser.Array_createContext = Array_createContext; 
AMOSParser.Array_updateContext = Array_updateContext; 
AMOSParser.Screen_openContext = Screen_openContext; 
AMOSParser.Curs_offContext = Curs_offContext; 
AMOSParser.Curs_onContext = Curs_onContext; 
AMOSParser.InkContext = InkContext; 
AMOSParser.TextContext = TextContext; 
AMOSParser.Do_loopContext = Do_loopContext; 
AMOSParser.While_wendContext = While_wendContext; 
AMOSParser.For_loopContext = For_loopContext; 
AMOSParser.If_statementContext = If_statementContext; 
AMOSParser.Else_statementContext = Else_statementContext; 
AMOSParser.If_statement_key_stateContext = If_statement_key_stateContext; 
AMOSParser.BarContext = BarContext; 
AMOSParser.ProcedureContext = ProcedureContext; 
AMOSParser.Current_Key_StateContext = Current_Key_StateContext; 
AMOSParser.Print_optionsContext = Print_optionsContext; 
AMOSParser.Print_somethingContext = Print_somethingContext; 
