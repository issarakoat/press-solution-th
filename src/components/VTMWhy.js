import React from 'react';
import XuduanModal from '../components/XuduanModal'
import {Jumbotron} from 'react-bootstrap'
const VTMWhy = ()=>(
    <div>
        <Jumbotron>
        <h1>ทำไมถึงเลือก Xudual</h1>
            <p>
                <li>มาตรฐานการผลิตเป็นไปตามมาตรฐานสากล</li>
                <li>มีทั้งระบบ Air Clutch และ Wet Clutch</li>
                <li>Cushion แบบ"Piston Type" มีความแข็งแรงยิ่งขึ้น</li>
                <li>ใช้อุปกรณ์ยี่ห้อตามมาตรฐาน เช่น PLC Mitsubishi, ABB, Schneider, Omron, SMC</li>
                <li>ราคาสมเหตุสมผล</li>
                <li>ขั้นตอนการสั่งซื้อสะดวกง่ายดาย ไม่ซับซ้อน</li>
            </p>
            <p>
                <XuduanModal />
            </p>
        </Jumbotron>
                
    </div>
)
export default VTMWhy
