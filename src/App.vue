<template>
  <div id="app">
    <!-- body starts -->
     <input type="checkbox" id="check">
    <Header />
    <div class="content">
       <div class="card heading_card ">
          <div class="row">
             <div class="col-sm-6"><h3>View Orders</h3></div>
             <div class=" col-sm-6 total_count"><p>Total Orders:<span>{{this.orders.length}}</span></p></div> 
          </div> 
       </div>   
    <!--display table starts -->
       <div class="card">
          <div class="row card_inner">
             <div class="col-md-12 ">   
                <table class="table display table-bordered">
                    <thead>
                       <tr>
                          <th>S.No</th>
                          <th>Customer Name</th>
                          <th>No of items</th>
                          <th>Total Amount</th>
                          <th>Pizza Status</th>
                          <th>Action</th>
                        </tr>
                     </thead>
                    <tbody>
                        <tr v-for="(order,index) in orders" :key="index">
                            <td>#{{index+1}}</td>
                            <td>{{order.customer}}</td>
                            <td>{{order.nitems}}</td>
                            <td><span class="total_amount">&#8377;</span>{{order.price*order.nitems}}</td>
                            <td>
                              <span v-if="order.status=='received'" class="received">Order Received</span>
                              <span v-else-if="order.status=='preparing'" class="preparing">Preparing</span>
                              <span v-else class="ready">Ready to Serve</span>
                            </td>
                            <td><button type="button" class="btn my-btn" @click="changeStatus(order.id)" >Change Status</button></td>
                        </tr>
                      </tbody>
                </table>
              </div>
            </div>
          </div> 
     <!--display table ends -->
    </div>
    <!-- body ends -->               
  </div>
</template>

<script>
 import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return{
        received_orders:[
          {id:1,oid:14,customer:"sanju",nitems:3,price:30,status:"received"},
          {id:2,oid:20,customer:"kavya",nitems:6,price:50,status:"received"},
          {id:3,oid:28,customer:"manu",nitems:4,price:10,status:"received"},
          {id:4,oid:60,customer:"abhinav",nitems:3,price:30,status:"received"},
          {id:5,oid:67,customer:"suresh",nitems:6,price:50,status:"received"},
          {id:6,oid:54,customer:"harika",nitems:4,price:10,status:"received"},
          {id:7,oid:78,customer:"divya",nitems:3,price:30,status:"received"},
          {id:8,oid:84,customer:"sowjanya",nitems:6,price:50,status:"received"},
        ],
       orders:[],
    }
  },
  methods:{
     changeStatus(id){
          this.orders.map((el)=>{
             if((el.id==id)&&(el.status=='received')){
                 el.status='preparing';
             }else if((el.id==id)&&(el.status=='preparing')){
                 el.status='ready';
             }
           })
          localStorage.setItem('orders',JSON.stringify(this.orders));
       },
  },
  mounted() {
      if(localStorage.getItem('orders')==null){
          this.orders = this.received_orders;
          localStorage.setItem('orders',JSON.stringify(this.received_orders));
      }else{
          this.orders = JSON.parse(localStorage.getItem("orders"));
      }
  },
}
</script>

