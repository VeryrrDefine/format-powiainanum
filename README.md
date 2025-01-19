# format-powiainanum

## Description
Implementation of PsiCubed's letter notation for large number library, currently PowiainaNum.js ([OmegaNum.js & ExpantaNum.js see here](https://github.com/cloudytheconqueror/letter-notation-format)).

Based on [cloudytheconqueror/letter-notation-format](https://github.com/cloudytheconqueror/letter-notation-format).

## Letter notation resources
* [Definition of E to H, as well as x(letter)y notation](https://googology.wikia.org/wiki/User_blog:PsiCubed2/My_Letter_Notation)
* [Definition of J, K, L, M, N](https://googology.wikia.org/wiki/User_blog:PsiCubed2/Letter_Notation_Part_II)
* [Definition of xJy and xKy](https://googology.wikia.org/wiki/User_blog:PsiCubed2/Letter_Notation_Part_III)
* [Examples of letter notation up to 10{10}10](https://googology.wikia.org/wiki/User_blog:PsiCubed2/This_Wiki%27s_%22List_of_Googolisms%22_translated_to_Letter_Notation)

## Cases
For PowiainaNum.js:
* 0 ~ 0.0001: Display reciprocal
* 0.0001 ~ 1: Display in additional precision if small is on
* 1 ~ 1000: Normal format
* 1000 ~ 1e9: Comma format
* 1e9 ~ 10^^5: Exponential format, as well as e..ex format
* 10^^5 ~ 10^^1,000,000: xFy format
* 10^^1,000,000 ~ 10^^^5: F..Fx format
* 10^^^5 ~ 10^^^1,000,000: xGy format
* 10^^^1,000,000 ~ 10^^^^5: G..Gx format
* 10^^^^5 ~ 10^^^^1,000,000: xHy format
* 10^^^^1,000,000 ~ 10^^^^^5: H..Hx format
* 10^^^^^5 ~ J1,000,000: xJy format
* J1,000,000 ~ J^4 10: J..Jx format
* J^4 10 ~ J^999,999 10: xKy format
* J^999,999 10 ~ `l0 s1 a[10,[1,4,2,1]]`(10{{2}}5): K..Kx format
* Still developing