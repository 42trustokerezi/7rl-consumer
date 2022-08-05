import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import tests from "../../../Extra/dummyData"
import TestCard from '../SingleTests/TestCard';
import smplywell from "../../../Assets/img/simplywell.jpg"
import xtrawellmen from "../../../Assets/img/xtra-man.jpg"
import xtrawellwmen from "../../../Assets/img/xtra-woman.jpg"
import velvetiessential from "../../../Assets/img/velveti-essential.jpg"
import velvetigold from "../../../Assets/img/velveti-gold.jpg"
import raspicare from "../../../Assets/img/respcare.jpg"
import "./testlist.css"
import Button from '../../Button/Button';

const TestList = ({title}) => {
    // const [testlist, setTestList] = useState([])

    // useEffect(()=>{
    //     setTestList(tests)
    // }, [])
    // /**  */
    // const displayTest = testlist&& testlist.map((test, index)=> {
    //     const key = index;
    //     const name = test.name;
    //     const price = test.price;
    //     const imge = test.image;
        
    //     console.log(imge)
    //     let summary =""
    //     if(test.desc.length > 100){
    //          summary = test.desc.slice(0, 100)
    //     }
    //     return <div key={key}>{summary? (
    //                 <div key={key}>
    //                     <div className='image'>
    //                     <img src={imge}/>
    //                     </div>
    //                     <div>{name}</div>
    //                     <div>{price}</div>
    //                     <div>{summary}<a href='google.com'>read more</a></div> 
    //                 </div>
    //             ) : 
    //                 <div key={key}>
    //                     <div>{name}</div>
    //                     <div>{price}</div>
    //                     <div>{test.desc}</div>
    //                 </div>
    //             }
    //         </div>
    // })
    const [active, setActive] = useState("All Test");
    const [all, setAll] = useState(true);
    const [resp, setResp] = useState(false);
    const [general, setGeneral] = useState(false);
    const [sexual, setSexual] = useState(false);
    const testItems = ["All Health Checks","General Wellness","Sexually Transmitted Infections","Respiratory Infections"]

    const handleActiveMenu = (item) => {
        if(item === testItems[1]){
            setSexual(true);
            setAll(false);
            setGeneral(false);
            setResp(false);
        }else if(item === testItems[2]){
            setGeneral(true);
            setSexual(false);
            setResp(false);
            setAll(false);
        }else if(item === testItems[3]){
            setGeneral(false);
            setSexual(false);
            setResp(true);
            setAll(false);
        }else{
            setAll(true)
        }
        setActive(item);
    };

    const activeStyle = { borderBottom: "3px solid #F2E14F", paddingLeft: "0px" };
  return (
    <div>
        {/* {displayTest} */}
        <div className='tst_list_headr'>
            <h1>{title}</h1>
        </div>
        <div className='categories'>
            <ul>
                {testItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link 
                                className='nav-link'
                                to="#"
                                style={active === item ? activeStyle : {}}
                                onClick={() => handleActiveMenu(item)}
                            >   
                                {" "}
                                {item}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        < div className='test_list_wrapper'>
            <TestCard 
                image={smplywell}
                title="SimplyWell"
                price="NGN30,000"
                desc="This health check is made up of several tests that measure the overall health of your blood, cholesterol, triglycerides, kidney function, to assess the overall health of your body and including organs and hormones that influence metabolism and is commonly ordered as an annual health screening as it assesses multiple systems and organs to give a picture of general wellbeing."
                url= {'/product/7rl-simply-well'}
            />
            <TestCard 
                image={xtrawellmen}
                title="XtraWell For Men"
                price="NGN35,000"
                desc="This health check is made up of several tests that measure the overall health of your blood, cholesterol, triglycerides, kidney function, to assess the overall health of your body and including organs and hormones that influence metabolism and is commonly ordered as an annual health screening as it assesses multiple systems and organs to give a picture of general wellbeing."
                url= {'/product/7rl-xtrawell-men'}
            />
            <TestCard 
                image={xtrawellwmen}
                title="XtraWell For Women"
                price="NGN45,000"
                desc="This health check is made up of several tests that measure the overall health of your blood, cholesterol, triglycerides, kidney function, to assess the overall health of your body and including organs and hormones that influence metabolism and is commonly ordered as an annual health screening as it assesses multiple systems and organs to give a picture of general wellbeing."
                url= {'/product/7rl-xtrawell-women'}
            />
            <TestCard 
                image={velvetiessential}
                title="Velveti Essential"
                price="NGN11,000"
                desc="This health check is made up of several tests that measure the overall health of your blood, cholesterol, triglycerides, kidney function, to assess the overall health of your body and including organs and hormones that influence metabolism and is commonly ordered as an annual health screening as it assesses multiple systems and organs to give a picture of general wellbeing."
                url= {'/product/7rl-velveti-essential'}
            />
            <TestCard 
                image={velvetigold}
                title="velveti Gold"
                price="NGN30,200"
                desc="This health check is made up of several tests that measure the overall health of your blood, cholesterol, triglycerides, kidney function, to assess the overall health of your body and including organs and hormones that influence metabolism and is commonly ordered as an annual health screening as it assesses multiple systems and organs to give a picture of general wellbeing."
                url= {'/product/7rl-velveti-gold'}
            />
            <TestCard 
                image={raspicare}
                title="RaspiCare"
                price="NGN45,250"
                desc="This health check is made up of several tests that measure the overall health of your blood, cholesterol, triglycerides, kidney function, to assess the overall health of your body and including organs and hormones that influence metabolism and is commonly ordered as an annual health screening as it assesses multiple systems and organs to give a picture of general wellbeing."
                url= {'/product/7rl-respicare'}
            />
        </div>
        <div className='view-more'>
            <Link to='#'>
                <Button  title="View More" bgColor="#FFFFFF"/>
            </Link>
        </div>
    </div>
  )
}

export default TestList