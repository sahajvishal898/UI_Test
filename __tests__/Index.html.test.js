import jsdom from "jsdom";
const { JSDOM } = jsdom;
import { readFileSync} from "fs";
import path from "path";


const dom = new JSDOM( readFileSync(path.resolve(__dirname,"../src/index.html")))

describe ('index.html test',()=>{
    
  it('check title of index.html',()=>{
    var title= dom.window.document.title
   
    expect(title).toBe("ESOPS Trading Platform")
  })
})