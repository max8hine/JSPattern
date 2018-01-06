function getDeepestPit(Arr){
	var depth = 0,
		P = 0, 
		Q = -1, 
		R = -1;

    for (let i = 1; i < Arr.length; i++) {

        if (Q < 0 && Arr[i] >= Arr[i-1]) { Q = i - 1 };
        if ((Q >= 0 && R < 0) 
        	&&
        	(Arr[i] <= Arr[i-1] || i + 1 == Arr.length)){

            Arr[i] <= Arr[i-1] ? R = i - 1 : R = i;

            depth = Math.max(depth, Math.min(Arr[P]-Arr[Q], Arr[R]-Arr[Q]));

						console.log(`P:${P} + Q:${Q} + R${R}`);
            P = i - 1; 
            Q = R = -1;
        };
    };
  if (depth == 0) {depth = -1};
  console.log(`Depth: ${depth}`);
}
var arr = [0, 1, 3, -2, 0, 1, 0, -3, 2, 3, 6];
getDeepestPit(arr);