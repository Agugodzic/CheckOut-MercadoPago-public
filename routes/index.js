import { Router } from "express";
import { newOrder, notificationOrder, findPaymentById} from "../controller/preferenciasController.js";
import orderId from "../models/orderId.js";

const router = Router();
const order = orderId;

router.post('/new-order',newOrder);
router.post('/notification',notificationOrder);
router.get('/find-paymeny-by-id',findPaymentById);

router.post('/test',(req,res)=>{
  console.log(req.body)
  res.status(200).send(req.body);
});

// ---- DATABASE ---- //

router.get('/orden/:id', async(req,res)=>{
  const {id} = req.params;
  const dato = await order.getById(id);
  res.json(dato);
})

router.get('/order', async(req,res)=>{
  const dato = await order.findAll();
  res.json(dato);
})

router.post('/order/add', async(req,res)=>{
  const order_Id = req.body.orderId;
  const topic = req.body.topic;
  const payment_Id = req.body.paymentId.toString();
  if(!order_Id || !payment_Id){
    return res.status(400).json({error:"req is null"})
  }
  try{
    const add = await order.create({
    orderId:order_Id,
    topic:topic,
    paymentId:payment_Id
  });
  res.json(add);
  }catch(err){
    res.status(400).json({error:"Error:" + err})
    throw(err)
  }
})


export default router;

