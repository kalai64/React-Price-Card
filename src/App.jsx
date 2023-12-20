import React from 'react'
import Card from './components/Card'

function App() {

  const details = [{
    plan:"Free",
    price:"$0",
    user:"Single user",
    isUser:true,
    storage:"5GB Storage",
    isStorage:true,
    public:"Unlimited Public Projects",
    isPublic:true,
    access:"Community Access",
    isAccess:true,
    private:"Unlimited Private Projects",
    isPrivate:false,
    support:"Dedicated Phone Support",
    isSupport:false,
    domain:"Free Subdomain",
    isDomain:false,
    reports:"Monthly Status reports",
    isReports:false
  },
  {
    plan:"Plus",
    price:"$9",
    user:"5 user",
    isUser:true,
    storage:"50GB Storage",
    isStorage:true,
    public:"Unlimited Public Projects",
   isPublic:true,
    access:"Community Access",
    isAccess:true,
    private:"Unlimited Private Projects",
    isPrivate:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    domain:"Free Subdomain",
    isDomain:true,
    reports:"Monthly Status reports",
    isReports:false
  },
  {
    plan:"Pro",
    price:"$49",
    user:"Unlimited user",
    isUser:true,
    storage:"150GB Storage",
    isStorage:true,
    public:"Unlimited Public Projects",
    isPublic:true,
    access:"Community Access",
    isAccess:true,
    private:"Unlimited Private Projects",
    isPrivate:true,
    support:"Dedicated Phone Support",
    isSupport:true,
    domain:"Free Subdomain",
    isDomain:true,
    reports:"Monthly Status reports",
    isReports:true
  }]

  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        details.map((e,i)=>{
          return <Card data={e} key={i}/>
        })

      }
      
      
    </div>
  </div>
</section>

  </>
}
export default App;