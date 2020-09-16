const adjust = n => f => xs => mapi(x => i => i == n ? f(x) : (x)(xs))
