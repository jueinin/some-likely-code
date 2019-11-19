import inquirer from 'inquirer';

let type: any, version: any, developmentEnv: any;
inquirer.prompt([
    {
        type: 'list',
        name: 'type',
        message: "选择start还是build",
        choices: ['start', 'build']
    }
]).then((answer: any) => {
    type = answer.type;
    inquirer.prompt({
        type: "list",
        name: "version",
        message: "请选择版本",
        choices: [{name:'正常的版本',value:""}, {name: "海通定制版",value: 'haitong'}, {name: "金沙版", value: "jinsha"}],
    }).then((answer:any) => {
        version = answer.version;
        inquirer.prompt({
            type: "list",
            name: "developmentEnv",
            message: "选择环境",
            choices: ["dev", "pre", "prod", "poc"]
        }).then((answer:any)=>{
            developmentEnv = answer.developmentEnv;
            console.log(`node scripts/${type}.js --developmentEnv ${developmentEnv} --jinsha ${version} --haitong ${version}`);
            // console.log(type, version, developmentEnv);
        })
    })
});