const explorer = {
    name : "root",
    isFolder:true,
    items:[
        {
            name:"public",
            isFolder:true,
            items:[
                {
                    name : "public nested 1",
                    isFolder:true,
                    items:[
                        {
                            name:"index.html",
                            isFolder:false
                        },{
                            name:"hello.html",
                            isFolder:false
                        }
                    ]
                },{
                    name:"public nested file",
                    isFolder:false
                }
            ]
        },{
            name:"src",
            isFolder:true,
            items:[
                {
                    name:"App.js",
                    isFolder:false
                },
                {
                    name:"index.js",
                    isFolder:false
                },{
                    name:"styles.css",
                    isFolder:false
                }
            ]
        },{
            name:"package.json",
            isFolder:false
        }
    ]
}

export default explorer