const glob = require("glob")
function setEntry(){
    const file = glob.sync('./src/page/**/index.jsx')
}