// 判断是否是pc
export function isPc() {
    let userAgentInfo = navigator.userAgent;
    let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    let flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}
                                    
export const webConfig = {
    header:{
        logo:require('@/assets/web/logo1.png'),
        contact:'400 650 9878',
        words:{
            group1:{ p1:'雅阁酒店加盟',p2:'1000+',p3:'投资者的首选',p4:'快至2-3年回本' },
            group2:{ p1:'雅阁集团亚太酒店分布',p2:'加盟酒店遍布',p3:'101',p4:'座城市',p5:"144" ,p6:"家酒店（2019年6月）",p7:"23250",p8:'间客房'},
        },
        menu:[{ title:'企业简介' },{ title:'集团实力' },{title:'集团荣耀'},{title:'盈利模式'},{title:'加盟支持'},{title:'投资回报'},{title:'联系我们'}]
    },
    body:{
        // 企业介绍
        introduce:{
            menu:[
                    { img:require('@/assets/web/icon1.png'),des:'澳大利亚最具规模的酒店集团' },
                    { img:require('@/assets/web/icon2.png'),des:'美国纽交所上市公司' },
                    { img:require('@/assets/web/icon3.png'),des:'澳洲政府高度认可' },
                ],
            title:'东方情 · 澳洲风',
            des:'内蕴东方人文关怀，外显澳洲阳光风情',
            bgImg:require('@/assets/web/bg1.png'),
            content:'雅阁酒店集团（澳大利亚），拥有全球9大酒店品牌，覆盖奢华酒店、城市精品酒店、度假村等中高端酒店。一方面成为酒店专业人才的培养与输送基地 ，挖掘酒店高级管理人员，另一方面整合社会资源发挥经验优势，为全球业主提供与酒店管理相关的一系列服务。',

        },
        // 集团实力
        power:{
            bgImg:require('@/assets/web/bg2.png'),
            bgList:{
                title:'澳大利亚在华“符号”',
                des:'澳大利亚最具规模的酒店集团',
                list:[
                    { title:'10强',des:'外资酒店集团在华十强' },
                    { title:'60强',des:'全球酒店集团六十强' },
                    { title:'25000+名',des:'全球雇员数超25000名' },
                    { title:'400+亿',des:'管理全球逾400+亿元酒店资产' },
                    { title:'14.23亿',des:'雅阁品牌价值14.23亿元' },
                    { title:'3000+万',des:'雅阁会员3000+万人' },
                ]
            }
        }
    }
}