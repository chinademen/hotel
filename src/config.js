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

// 数组分割
export function arraySlice( array,subGroupLength ) {
    let [index,newArray] = [0,[]];
    while ( index < array.length ){
        newArray.push(array.slice(index,index += subGroupLength));
    };
    return newArray
}
                                    
export const webConfig = {
    header:{
        logo:require('@/assets/web/logo1.png'),
        contact:'400 650 9878',
        words:{
            group1:{ p1:'雅阁酒店加盟',p2:'1000+',p3:'投资者的首选',p4:'快至2-3年回本' },
            group2:{ p1:'雅阁集团亚太酒店分布',p2:'加盟酒店遍布',p3:'101',p4:'座城市',p5:"144" ,p6:"家酒店（2019年6月）",p7:"23250",p8:'间客房'},
        },
        menu:[
            { title:'企业简介',code:'introduce' },
            { title:'集团实力',code:'power' },
            {title:'集团荣耀',code:'profitability'},
            {title:'盈利模式',code:'profitability'},
            {title:'加盟支持',code:'support'},
            {title:'投资回报',code:'investment'},
            {title:'联系我们',code:'contactUs'}
        ]
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
        // 集团实力 集团荣耀
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
            },
            slickList:[
                { time:'2017 / 2016',words:'服务业卓越成就大奖',by:'— 中国澳大利亚商会' },
                { time:'2017',words:'国家级服务业出口贸易大奖',by:'— 澳洲政府' },
                { time:'2017 / 2018',words:'旅游业“最佳雇主”',by:'— 最佳东方' },
                { time:'2015 / 2014 / 2013',words:'中国酒店集团60强',by:'— 中国旅游饭店业协会' },

                { time:'2015',words:'最佳商业服务奖',by:'— 中国澳大利亚商会' },
                { time:'2015 / 2014 / 2013',words:'在华大型企业卓越 成就奖 ',by:'— 中国澳大利亚商会' },
                { time:'2016 / 2015 / 2014 ',words:'澳洲商业服务出口大奖',by:'— 澳大利亚政府' },
                { time:'2014',words:'中国酒店投资人联盟',by:'— 中国澳大利亚商会' },

                { time:'2013',words:'在华大型企业特别 认可奖',by:'— 中国澳大利亚商会' },
                { time:'2010',words:'中国最佳国际酒店 管理集团',by:'— 星光奖' },
            ]
        },
				
        // 盈利模式
        profitability:{
            slickList:[
                { dots:require('@/assets/web/mode1.png'),bgimg:require('@/assets/web/pro1.png') },
                { dots:require('@/assets/web/mode2.png'),bgimg:require('@/assets/web/pro2.png') },
                { dots:require('@/assets/web/mode3.png'),bgimg:require('@/assets/web/pro3.png') },
                { dots:require('@/assets/web/mode4.png'),bgimg:require('@/assets/web/pro4.png') },
                { dots:require('@/assets/web/mode5.png'),bgimg:require('@/assets/web/pro5.png') },
                { dots:require('@/assets/web/mode6.png'),bgimg:require('@/assets/web/pro6.png') },
                { dots:require('@/assets/web/mode7.png'),bgimg:require('@/assets/web/pro7.png') },
                { dots:require('@/assets/web/mode8.png'),bgimg:require('@/assets/web/pro8.png') },
                { dots:require('@/assets/web/mode9.png'),bgimg:require('@/assets/web/pro9.png') },
            ],
            des:[
                { name:'雅阁大酒店',title:'巅峰品质  超越期望',des:'奢华酒店品牌',word:'20余年的品牌沉淀 <br /> 华贵而内敛、热情而含蓄<br />助力感受城市的魅力<br />成为很多城市的地标。'},
                { name:'雅阁璞邸酒店',title:'一店一故事  住在时光里',des:'艺术奢华酒店品牌',word:'2“Boutique” 私密、精品、艺术酒店的象征，酒店的地点绝大多数都有着无可伦比的自然环境或元素融合当地独特的文化、历史与自然风情，每一家酒店都为宾客讲述着动人故事。'},
                { name:'雅阁度假酒店',title:'自然领略 怡情体验',des:'豪华度假酒店',word:'寻找一片净土，独享一方宁静、让心灵沉淀，让思绪飘荡、隔绝世俗的喧嚣、体验别样的澳大利亚雅阁度假休闲时光。'},
                { name:'雅阁酒店',title:'魅力商务 品质典范',des:'高端商旅酒店',word:'感受热情浓郁的澳洲人文气息、让宾客在陌生的城市里，卸下疲惫、享受惬意恬适的难忘旅程。'},
                { name:'雅阁公寓',title:'缤纷静憩 唯寓从容',des:'国际高档服务式公寓',word:'雅阁公寓，专为城市精英及旅行者提供个性化服务的公寓住所，配备舒适、高品质的功能设施，提供高效的酒店式服务。'},
                { name:'雅阁奥斯特',title:'灵感相随',des:'国际中高档精品酒店品牌',word:'雅阁澳斯特以“钢铁城中的海岸线“为主题，将现代生活美学与海岸文明相结合，是为酒店投资人及消费者量身打造低投入、高回报的轻奢设计酒店品牌。'},
                { name:'奥斯特精选酒店',title:'灵感相随',des:'国际中档时尚酒店品牌',word:'澳斯特精选倡导时尚简约的生活方式，帮助宾客在旅途中寻求全新的酒店体验；生活在路上，风景和相遇的人在变，不变的是甄选品质，始终与您灵感相随。'},
                { name:'奥斯特公寓',title:'灵感相随',des:'国际中高档精品酒店品牌',word:'雅澳斯特公寓致力于为商旅住客提供便捷、舒适、高性价比的服务式公寓居住体验；可以多彩也可以简约，可以躁动也可以静谧。汇集潮流，自由自在，是新青年们在旅途中完美空间的不二之选。'},
                { name:'Metro酒店',title:'历史积淀  传承赞誉',des:'中端经典商旅酒店品牌',word:'在澳大利亚，Metro酒店遍及悉尼，墨尔本，佩斯，布里斯班，格拉斯通等核心城市，悠久的历史，备受赞誉的良好口碑使其成为高品质酒。'},
            ]
        },					
								

        // 加盟支持
        support:{
            positionList:[
                { title:'品牌优势',des:'雅阁是享誉世界的优秀酒店代名词',img:require('@/assets/web/support1.png') },
                { title:'高投资回报率',des:'免费为用户提供高性价比加盟方案，为广大业主带来了稳定，高额的投资回报，一般2～3年回本。',img:require('@/assets/web/support2.png') },
                { title:'成熟的运营模式',des:'拥有国际知名酒店销售代理商支持的全球化市场销售体系，整店复制输出，保障业主投资收益。',img:require('@/assets/web/support3.png') },
                { title:'顾问级咨询支持',des:'为成员酒店提供全程建设服务，以及各项评估审核、市场分析、运营管理等咨询服务。',img:require('@/assets/web/support4.png') },
                { title:'标准化的管理系统',des:'完善的管理体系实现成员酒店销售、供应链、技术支持及人才培训的统一管理。',img:require('@/assets/web/support5.png') },
                { title:'人才培训体系',des:'引进澳洲体系化的酒店职业教育与培训，与国内多所大学联合办学，输出酒店管理专业人才。',img:require('@/assets/web/support6.png') },
                { title:'定制化的合作模式',des:'由顶尖设计团队量身打造，实现视觉体系标准统一，据业主需求开展服务技能培训、技术指导等。',img:require('@/assets/web/support7.png') },
            ]
        },
        // 投资回报
        investment:{
            investmentList1:[
                {title:'全球分销系统',des:'拥有国际知名酒店销售代理商支持的 全球化市场销售体系。'},
                {title:'中央订房系统',des:'全国400免费订房专线、移动网站、 WAP短信预订系统。'},
                {title:'集团营销体系',des:'提供规划设计、建筑施工、开发筹备及日常 运作过程中涉及产品。'},
                {title:'计划预算管理',des:'技术服务、开业管理和运营，各阶段都须通过 计划与预算来管理。'},
                {title:'集团供应链系统管理',des:'拥有国际知名酒店销售、代理商支持的全球化 市场销售体系。'},
                
            ],
            investmentList2:[
                {title:'统一识别系统',des:'由欧洲顶尖设计团队量身打造，实现酒店视觉 体系的标准统一。'},
                {title:'品牌标准手册',des:'集团管理标准体系，涵盖酒店各部门的一切政策和程序。'},
                {title:'质量监控系统',des:'集团统一组织和知道，对成员酒店进行年度检查和测评。'},
                {title:'技术支持系统',des:'实施专业志愿计划，是成员酒店获得最低成本及最快的技术支持。'},
                {title:'人才培训系统',des:'逐月进行的专题培训会，为您的酒店注入世界一流的管理经验。'},
            ],
            casekey:{
                title:'案例展示',
                des:'截止到2019年6月，加盟酒店遍布101座城市，共144家酒店，23250间客房',
                list:[
                    { title:'海南三亚亚龙湾雅阁温泉度假酒店',img:require('@/assets/web/case1.png') },
                    { title:'福建南平雅阁国际大酒店',img:require('@/assets/web/case2.png') },
                    { title:'广东广州白云机场航湾澳斯特精选酒店',img:require('@/assets/web/case3.png') },
                    { title:'广东广州南沙古格雅阁酒店',img:require('@/assets/web/case4.png') },
                    { title:'贵州遵义国贸雅阁大酒店',img:require('@/assets/web/case5.png') },
                    { title:'江苏镇江西津渡雅阁璞邸酒店',img:require('@/assets/web/case6.png') },
                    { title:'陕西西安沣东澳斯特酒店',img:require('@/assets/web/case7.png') },
                    { title:'浙江湖州红木房雅阁璞邸酒店',img:require('@/assets/web/case8.png') },
                ]
            }
        },
        // 联系我们
        contactUs:{
            
        }
    }
}










								
								
								
								
								
								
								
								
								
								
								








