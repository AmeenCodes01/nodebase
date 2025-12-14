## TRPC

I wasn't returning anything while doing a mutation and so TRPS took it as a GET req and threw error. 

## Inngest
mprocs started both simultaneously, wasn't recognising func (but did event name). 
Solved by first npm run dev, then npm run inngest:dev