// Generated from AMOS.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,74,527,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,
7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,
41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,
2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,
56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,
7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,
70,2,71,7,71,2,72,7,72,2,73,7,73,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,
1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,
1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,
15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,
1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,
20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,24,1,24,1,24,1,24,
1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,30,1,
30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,1,32,3,32,318,8,32,1,32,4,32,321,8,32,11,32,12,32,322,1,33,1,33,
1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,36,1,
36,5,36,342,8,36,10,36,12,36,345,9,36,1,36,1,36,1,37,4,37,350,8,37,11,37,
12,37,351,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,
39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,
1,41,1,42,1,42,5,42,384,8,42,10,42,12,42,387,9,42,1,42,1,42,1,43,1,43,1,
43,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,47,1,47,
1,47,1,47,1,47,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,
50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,
1,53,1,53,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,
54,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,57,
1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,1,
58,1,58,1,58,1,58,1,59,1,59,5,59,486,8,59,10,59,12,59,489,9,59,1,60,1,60,
1,60,1,60,1,60,1,60,1,60,1,60,1,60,3,60,500,8,60,1,61,1,61,1,62,1,62,1,63,
1,63,1,64,1,64,1,65,1,65,1,66,1,66,1,67,1,67,1,68,1,68,1,69,1,69,1,70,1,
70,1,71,1,71,1,72,1,72,1,73,1,73,0,0,74,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,
8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,
41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,
65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,
89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,107,54,109,55,111,
56,113,57,115,58,117,59,119,60,121,61,123,62,125,63,127,64,129,65,131,66,
133,67,135,68,137,69,139,70,141,71,143,72,145,73,147,74,1,0,6,1,0,48,57,
2,0,10,10,13,13,3,0,9,10,13,13,32,32,1,0,34,34,3,0,65,90,95,95,97,122,4,
0,48,57,65,90,95,95,97,122,537,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,
19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,
0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,
1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,
0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,
0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,
75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,
0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,
1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,
0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,
0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,
0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,
139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,0,145,1,0,0,0,0,147,1,0,0,0,1,149,
1,0,0,0,3,153,1,0,0,0,5,159,1,0,0,0,7,164,1,0,0,0,9,171,1,0,0,0,11,175,1,
0,0,0,13,182,1,0,0,0,15,190,1,0,0,0,17,195,1,0,0,0,19,201,1,0,0,0,21,210,
1,0,0,0,23,218,1,0,0,0,25,225,1,0,0,0,27,232,1,0,0,0,29,236,1,0,0,0,31,240,
1,0,0,0,33,246,1,0,0,0,35,253,1,0,0,0,37,258,1,0,0,0,39,264,1,0,0,0,41,268,
1,0,0,0,43,271,1,0,0,0,45,275,1,0,0,0,47,279,1,0,0,0,49,281,1,0,0,0,51,285,
1,0,0,0,53,288,1,0,0,0,55,291,1,0,0,0,57,293,1,0,0,0,59,296,1,0,0,0,61,298,
1,0,0,0,63,304,1,0,0,0,65,317,1,0,0,0,67,324,1,0,0,0,69,331,1,0,0,0,71,337,
1,0,0,0,73,339,1,0,0,0,75,349,1,0,0,0,77,355,1,0,0,0,79,364,1,0,0,0,81,372,
1,0,0,0,83,376,1,0,0,0,85,381,1,0,0,0,87,390,1,0,0,0,89,393,1,0,0,0,91,398,
1,0,0,0,93,402,1,0,0,0,95,405,1,0,0,0,97,410,1,0,0,0,99,413,1,0,0,0,101,
418,1,0,0,0,103,425,1,0,0,0,105,431,1,0,0,0,107,436,1,0,0,0,109,441,1,0,
0,0,111,451,1,0,0,0,113,460,1,0,0,0,115,464,1,0,0,0,117,473,1,0,0,0,119,
483,1,0,0,0,121,499,1,0,0,0,123,501,1,0,0,0,125,503,1,0,0,0,127,505,1,0,
0,0,129,507,1,0,0,0,131,509,1,0,0,0,133,511,1,0,0,0,135,513,1,0,0,0,137,
515,1,0,0,0,139,517,1,0,0,0,141,519,1,0,0,0,143,521,1,0,0,0,145,523,1,0,
0,0,147,525,1,0,0,0,149,150,5,69,0,0,150,151,5,110,0,0,151,152,5,100,0,0,
152,2,1,0,0,0,153,154,5,84,0,0,154,155,5,117,0,0,155,156,5,114,0,0,156,157,
5,98,0,0,157,158,5,111,0,0,158,4,1,0,0,0,159,160,5,68,0,0,160,161,5,114,
0,0,161,162,5,97,0,0,162,163,5,119,0,0,163,6,1,0,0,0,164,165,5,76,0,0,165,
166,5,111,0,0,166,167,5,99,0,0,167,168,5,97,0,0,168,169,5,116,0,0,169,170,
5,101,0,0,170,8,1,0,0,0,171,172,5,65,0,0,172,173,5,100,0,0,173,174,5,100,
0,0,174,10,1,0,0,0,175,176,5,78,0,0,176,177,5,85,0,0,177,178,5,77,0,0,178,
179,5,66,0,0,179,180,5,69,0,0,180,181,5,82,0,0,181,12,1,0,0,0,182,183,5,
66,0,0,183,184,5,108,0,0,184,185,5,105,0,0,185,186,5,116,0,0,186,187,5,116,
0,0,187,188,5,101,0,0,188,189,5,114,0,0,189,14,1,0,0,0,190,191,5,67,0,0,
191,192,5,111,0,0,192,193,5,112,0,0,193,194,5,121,0,0,194,16,1,0,0,0,195,
196,5,76,0,0,196,197,5,105,0,0,197,198,5,109,0,0,198,199,5,105,0,0,199,200,
5,116,0,0,200,18,1,0,0,0,201,202,5,65,0,0,202,203,5,117,0,0,203,204,5,116,
0,0,204,205,5,111,0,0,205,206,5,98,0,0,206,207,5,97,0,0,207,208,5,99,0,0,
208,209,5,107,0,0,209,20,1,0,0,0,210,211,5,80,0,0,211,212,5,97,0,0,212,213,
5,108,0,0,213,214,5,101,0,0,214,215,5,116,0,0,215,216,5,116,0,0,216,217,
5,101,0,0,217,22,1,0,0,0,218,219,5,68,0,0,219,220,5,111,0,0,220,221,5,117,
0,0,221,222,5,98,0,0,222,223,5,108,0,0,223,224,5,101,0,0,224,24,1,0,0,0,
225,226,5,66,0,0,226,227,5,117,0,0,227,228,5,102,0,0,228,229,5,102,0,0,229,
230,5,101,0,0,230,231,5,114,0,0,231,26,1,0,0,0,232,233,5,80,0,0,233,234,
5,101,0,0,234,235,5,110,0,0,235,28,1,0,0,0,236,237,5,67,0,0,237,238,5,108,
0,0,238,239,5,115,0,0,239,30,1,0,0,0,240,241,5,80,0,0,241,242,5,97,0,0,242,
243,5,112,0,0,243,244,5,101,0,0,244,245,5,114,0,0,245,32,1,0,0,0,246,247,
5,68,0,0,247,248,5,101,0,0,248,249,5,103,0,0,249,250,5,114,0,0,250,251,5,
101,0,0,251,252,5,101,0,0,252,34,1,0,0,0,253,254,5,72,0,0,254,255,5,105,
0,0,255,256,5,100,0,0,256,257,5,101,0,0,257,36,1,0,0,0,258,259,5,70,0,0,
259,260,5,108,0,0,260,261,5,97,0,0,261,262,5,115,0,0,262,263,5,104,0,0,263,
38,1,0,0,0,264,265,5,79,0,0,265,266,5,102,0,0,266,267,5,102,0,0,267,40,1,
0,0,0,268,269,5,79,0,0,269,270,5,110,0,0,270,42,1,0,0,0,271,272,5,83,0,0,
272,273,5,105,0,0,273,274,5,110,0,0,274,44,1,0,0,0,275,276,5,67,0,0,276,
277,5,111,0,0,277,278,5,115,0,0,278,46,1,0,0,0,279,280,5,61,0,0,280,48,1,
0,0,0,281,282,5,68,0,0,282,283,5,105,0,0,283,284,5,109,0,0,284,50,1,0,0,
0,285,286,5,60,0,0,286,287,5,62,0,0,287,52,1,0,0,0,288,289,5,62,0,0,289,
290,5,61,0,0,290,54,1,0,0,0,291,292,5,62,0,0,292,56,1,0,0,0,293,294,5,60,
0,0,294,295,5,61,0,0,295,58,1,0,0,0,296,297,5,60,0,0,297,60,1,0,0,0,298,
299,5,80,0,0,299,300,5,114,0,0,300,301,5,105,0,0,301,302,5,110,0,0,302,303,
5,116,0,0,303,62,1,0,0,0,304,305,5,83,0,0,305,306,5,99,0,0,306,307,5,114,
0,0,307,308,5,101,0,0,308,309,5,101,0,0,309,310,5,110,0,0,310,311,5,32,0,
0,311,312,5,79,0,0,312,313,5,112,0,0,313,314,5,101,0,0,314,315,5,110,0,0,
315,64,1,0,0,0,316,318,5,45,0,0,317,316,1,0,0,0,317,318,1,0,0,0,318,320,
1,0,0,0,319,321,7,0,0,0,320,319,1,0,0,0,321,322,1,0,0,0,322,320,1,0,0,0,
322,323,1,0,0,0,323,66,1,0,0,0,324,325,5,76,0,0,325,326,5,111,0,0,326,327,
5,119,0,0,327,328,5,114,0,0,328,329,5,101,0,0,329,330,5,115,0,0,330,68,1,
0,0,0,331,332,5,72,0,0,332,333,5,105,0,0,333,334,5,114,0,0,334,335,5,101,
0,0,335,336,5,115,0,0,336,70,1,0,0,0,337,338,5,44,0,0,338,72,1,0,0,0,339,
343,5,39,0,0,340,342,8,1,0,0,341,340,1,0,0,0,342,345,1,0,0,0,343,341,1,0,
0,0,343,344,1,0,0,0,344,346,1,0,0,0,345,343,1,0,0,0,346,347,6,36,0,0,347,
74,1,0,0,0,348,350,7,2,0,0,349,348,1,0,0,0,350,351,1,0,0,0,351,349,1,0,0,
0,351,352,1,0,0,0,352,353,1,0,0,0,353,354,6,37,0,0,354,76,1,0,0,0,355,356,
5,67,0,0,356,357,5,117,0,0,357,358,5,114,0,0,358,359,5,115,0,0,359,360,5,
32,0,0,360,361,5,79,0,0,361,362,5,102,0,0,362,363,5,102,0,0,363,78,1,0,0,
0,364,365,5,67,0,0,365,366,5,117,0,0,366,367,5,114,0,0,367,368,5,115,0,0,
368,369,5,32,0,0,369,370,5,79,0,0,370,371,5,110,0,0,371,80,1,0,0,0,372,373,
5,73,0,0,373,374,5,110,0,0,374,375,5,107,0,0,375,82,1,0,0,0,376,377,5,84,
0,0,377,378,5,101,0,0,378,379,5,120,0,0,379,380,5,116,0,0,380,84,1,0,0,0,
381,385,5,34,0,0,382,384,8,3,0,0,383,382,1,0,0,0,384,387,1,0,0,0,385,383,
1,0,0,0,385,386,1,0,0,0,386,388,1,0,0,0,387,385,1,0,0,0,388,389,5,34,0,0,
389,86,1,0,0,0,390,391,5,68,0,0,391,392,5,111,0,0,392,88,1,0,0,0,393,394,
5,76,0,0,394,395,5,111,0,0,395,396,5,111,0,0,396,397,5,112,0,0,397,90,1,
0,0,0,398,399,5,70,0,0,399,400,5,111,0,0,400,401,5,114,0,0,401,92,1,0,0,
0,402,403,5,84,0,0,403,404,5,111,0,0,404,94,1,0,0,0,405,406,5,78,0,0,406,
407,5,101,0,0,407,408,5,120,0,0,408,409,5,116,0,0,409,96,1,0,0,0,410,411,
5,73,0,0,411,412,5,102,0,0,412,98,1,0,0,0,413,414,5,69,0,0,414,415,5,108,
0,0,415,416,5,115,0,0,416,417,5,101,0,0,417,100,1,0,0,0,418,419,5,69,0,0,
419,420,5,110,0,0,420,421,5,100,0,0,421,422,5,32,0,0,422,423,5,73,0,0,423,
424,5,102,0,0,424,102,1,0,0,0,425,426,5,87,0,0,426,427,5,104,0,0,427,428,
5,105,0,0,428,429,5,108,0,0,429,430,5,101,0,0,430,104,1,0,0,0,431,432,5,
87,0,0,432,433,5,101,0,0,433,434,5,110,0,0,434,435,5,100,0,0,435,106,1,0,
0,0,436,437,5,80,0,0,437,438,5,108,0,0,438,439,5,97,0,0,439,440,5,121,0,
0,440,108,1,0,0,0,441,442,5,80,0,0,442,443,5,114,0,0,443,444,5,111,0,0,444,
445,5,99,0,0,445,446,5,101,0,0,446,447,5,100,0,0,447,448,5,117,0,0,448,449,
5,114,0,0,449,450,5,101,0,0,450,110,1,0,0,0,451,452,5,69,0,0,452,453,5,110,
0,0,453,454,5,100,0,0,454,455,5,32,0,0,455,456,5,80,0,0,456,457,5,114,0,
0,457,458,5,111,0,0,458,459,5,99,0,0,459,112,1,0,0,0,460,461,5,66,0,0,461,
462,5,97,0,0,462,463,5,114,0,0,463,114,1,0,0,0,464,465,5,87,0,0,465,466,
5,97,0,0,466,467,5,105,0,0,467,468,5,116,0,0,468,469,5,32,0,0,469,470,5,
75,0,0,470,471,5,101,0,0,471,472,5,121,0,0,472,116,1,0,0,0,473,474,5,75,
0,0,474,475,5,101,0,0,475,476,5,121,0,0,476,477,5,32,0,0,477,478,5,83,0,
0,478,479,5,116,0,0,479,480,5,97,0,0,480,481,5,116,0,0,481,482,5,101,0,0,
482,118,1,0,0,0,483,487,7,4,0,0,484,486,7,5,0,0,485,484,1,0,0,0,486,489,
1,0,0,0,487,485,1,0,0,0,487,488,1,0,0,0,488,120,1,0,0,0,489,487,1,0,0,0,
490,500,5,61,0,0,491,492,5,60,0,0,492,500,5,62,0,0,493,494,5,62,0,0,494,
500,5,61,0,0,495,500,5,62,0,0,496,497,5,60,0,0,497,500,5,61,0,0,498,500,
5,60,0,0,499,490,1,0,0,0,499,491,1,0,0,0,499,493,1,0,0,0,499,495,1,0,0,0,
499,496,1,0,0,0,499,498,1,0,0,0,500,122,1,0,0,0,501,502,5,40,0,0,502,124,
1,0,0,0,503,504,5,41,0,0,504,126,1,0,0,0,505,506,5,91,0,0,506,128,1,0,0,
0,507,508,5,93,0,0,508,130,1,0,0,0,509,510,5,123,0,0,510,132,1,0,0,0,511,
512,5,125,0,0,512,134,1,0,0,0,513,514,5,36,0,0,514,136,1,0,0,0,515,516,5,
42,0,0,516,138,1,0,0,0,517,518,5,47,0,0,518,140,1,0,0,0,519,520,5,43,0,0,
520,142,1,0,0,0,521,522,5,45,0,0,522,144,1,0,0,0,523,524,5,58,0,0,524,146,
1,0,0,0,525,526,5,59,0,0,526,148,1,0,0,0,8,0,317,322,343,351,385,487,499,
1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class AMOSLexer extends antlr4.Lexer {

    static grammarFileName = "AMOS.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'End'", "'Turbo'", "'Draw'", "'Locate'", 
                         "'Add'", "'NUMBER'", "'Blitter'", "'Copy'", "'Limit'", 
                         "'Autoback'", "'Palette'", "'Double'", "'Buffer'", 
                         "'Pen'", "'Cls'", "'Paper'", "'Degree'", "'Hide'", 
                         "'Flash'", "'Off'", "'On'", "'Sin'", "'Cos'", "'='", 
                         "'Dim'", "'<>'", "'>='", "'>'", "'<='", "'<'", 
                         "'Print'", "'Screen Open'", null, "'Lowres'", "'Hires'", 
                         "','", null, null, "'Curs Off'", "'Curs On'", "'Ink'", 
                         "'Text'", null, "'Do'", "'Loop'", "'For'", "'To'", 
                         "'Next'", "'If'", "'Else'", "'End If'", "'While'", 
                         "'Wend'", "'Play'", "'Procedure'", "'End Proc'", 
                         "'Bar'", "'Wait Key'", "'Key State'", null, null, 
                         "'('", "')'", "'['", "']'", "'{'", "'}'", "'$'", 
                         "'*'", "'/'", "'+'", "'-'", "':'", "';'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          "SCREENOPEN", "NUMBER", "LOWRES", "HIRES", "COMMA", 
                          "COMMENT", "WS", "CURSOFF", "CURSON", "INK", "TEXT", 
                          "STRING", "DO", "LOOP", "FOR", "TO", "NEXT", "IF", 
                          "ELSE", "ENDIF", "WHILE", "WEND", "PLAY", "PROC", 
                          "ENDPROC", "BAR", "WAITKEY", "KEYSTATE", "IDENTIFIER", 
                          "COMPARISON", "BRACKETOPEN_PROP", "BRACKETCLOSE_PROP", 
                          "BRACKETOPEN_ARRAY", "BRACKETCLOSE_ARRAY", "BRACKETOPEN_FUNCTION", 
                          "BRACKETCLOSE_FUNCTION", "HECADECIMAL", "MULTIPLY", 
                          "DIVIDE", "ADD", "SUBTRACT", "STATEMENT_SEPARATOR", 
                          "FINISH_AND_ADD_OTHER_STATEMENT" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "T__13", "T__14", "T__15", "T__16", "T__17", "T__18", 
                      "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
                      "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", 
                      "SCREENOPEN", "NUMBER", "LOWRES", "HIRES", "COMMA", 
                      "COMMENT", "WS", "CURSOFF", "CURSON", "INK", "TEXT", 
                      "STRING", "DO", "LOOP", "FOR", "TO", "NEXT", "IF", 
                      "ELSE", "ENDIF", "WHILE", "WEND", "PLAY", "PROC", 
                      "ENDPROC", "BAR", "WAITKEY", "KEYSTATE", "IDENTIFIER", 
                      "COMPARISON", "BRACKETOPEN_PROP", "BRACKETCLOSE_PROP", 
                      "BRACKETOPEN_ARRAY", "BRACKETCLOSE_ARRAY", "BRACKETOPEN_FUNCTION", 
                      "BRACKETCLOSE_FUNCTION", "HECADECIMAL", "MULTIPLY", 
                      "DIVIDE", "ADD", "SUBTRACT", "STATEMENT_SEPARATOR", 
                      "FINISH_AND_ADD_OTHER_STATEMENT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

AMOSLexer.EOF = antlr4.Token.EOF;
AMOSLexer.T__0 = 1;
AMOSLexer.T__1 = 2;
AMOSLexer.T__2 = 3;
AMOSLexer.T__3 = 4;
AMOSLexer.T__4 = 5;
AMOSLexer.T__5 = 6;
AMOSLexer.T__6 = 7;
AMOSLexer.T__7 = 8;
AMOSLexer.T__8 = 9;
AMOSLexer.T__9 = 10;
AMOSLexer.T__10 = 11;
AMOSLexer.T__11 = 12;
AMOSLexer.T__12 = 13;
AMOSLexer.T__13 = 14;
AMOSLexer.T__14 = 15;
AMOSLexer.T__15 = 16;
AMOSLexer.T__16 = 17;
AMOSLexer.T__17 = 18;
AMOSLexer.T__18 = 19;
AMOSLexer.T__19 = 20;
AMOSLexer.T__20 = 21;
AMOSLexer.T__21 = 22;
AMOSLexer.T__22 = 23;
AMOSLexer.T__23 = 24;
AMOSLexer.T__24 = 25;
AMOSLexer.T__25 = 26;
AMOSLexer.T__26 = 27;
AMOSLexer.T__27 = 28;
AMOSLexer.T__28 = 29;
AMOSLexer.T__29 = 30;
AMOSLexer.T__30 = 31;
AMOSLexer.SCREENOPEN = 32;
AMOSLexer.NUMBER = 33;
AMOSLexer.LOWRES = 34;
AMOSLexer.HIRES = 35;
AMOSLexer.COMMA = 36;
AMOSLexer.COMMENT = 37;
AMOSLexer.WS = 38;
AMOSLexer.CURSOFF = 39;
AMOSLexer.CURSON = 40;
AMOSLexer.INK = 41;
AMOSLexer.TEXT = 42;
AMOSLexer.STRING = 43;
AMOSLexer.DO = 44;
AMOSLexer.LOOP = 45;
AMOSLexer.FOR = 46;
AMOSLexer.TO = 47;
AMOSLexer.NEXT = 48;
AMOSLexer.IF = 49;
AMOSLexer.ELSE = 50;
AMOSLexer.ENDIF = 51;
AMOSLexer.WHILE = 52;
AMOSLexer.WEND = 53;
AMOSLexer.PLAY = 54;
AMOSLexer.PROC = 55;
AMOSLexer.ENDPROC = 56;
AMOSLexer.BAR = 57;
AMOSLexer.WAITKEY = 58;
AMOSLexer.KEYSTATE = 59;
AMOSLexer.IDENTIFIER = 60;
AMOSLexer.COMPARISON = 61;
AMOSLexer.BRACKETOPEN_PROP = 62;
AMOSLexer.BRACKETCLOSE_PROP = 63;
AMOSLexer.BRACKETOPEN_ARRAY = 64;
AMOSLexer.BRACKETCLOSE_ARRAY = 65;
AMOSLexer.BRACKETOPEN_FUNCTION = 66;
AMOSLexer.BRACKETCLOSE_FUNCTION = 67;
AMOSLexer.HECADECIMAL = 68;
AMOSLexer.MULTIPLY = 69;
AMOSLexer.DIVIDE = 70;
AMOSLexer.ADD = 71;
AMOSLexer.SUBTRACT = 72;
AMOSLexer.STATEMENT_SEPARATOR = 73;
AMOSLexer.FINISH_AND_ADD_OTHER_STATEMENT = 74;



