# MEANSTACK
CRUD Operations in MEAN STACK

NOTE: Sometimes the CLI can output this error: 
ERROR NO NGMODULE METADATA FOUND FOR "APPMODULE".
That can be resolved in two ways:

Add "src/app/app.module.ts", in the ‘files’ array in the tsconfig.json file":

"files": [
    "src/app/app.module.ts",
    "node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge.ts"
]
 
The second way is: Go to src/app/app.module.ts, remove a random line, save the file, add back the line and run ng serve again.
