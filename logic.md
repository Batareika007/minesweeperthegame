# check - top | left | right | bottom
# top `x-17 x-16 x-15`   
# left `x-17 x-1 x+15`   
# right `x-15 x+1 x+17`   
# bottom `x+15 x+16 x+17`

// --fist check
## `if x===0`       check -  +1 +17 +16
## `if x===15`      check -  -1 +15 +16
## `if x===240`     check -  -16 -15 +1
## `if x===255`     check -  -16 -17 -1

// -- secons check
## `if x<=15`       check -  bottom && -1 +1
## `if x>=240`      check -  top    && -1 +1

// -- third check
## `if x%16 === 0`  check -  right  && -16 +16
## `if x%16 === 15` check -  left   && -17 +15

// else check all