const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const NAUTIZVOYAPPROVAL_SRV = await cds.connect.to("NAUTIZVOYAPPROVAL_SRV"); 
      srv.on('READ', 'voyapprovalSet', req => NAUTIZVOYAPPROVAL_SRV.run(req.query)); 
      srv.on('READ', 'xNAUTIxgetvoyapproval', req => NAUTIZVOYAPPROVAL_SRV.run(req.query)); 
      srv.on('READ', 'xNAUTIxvoyapproval1', req => NAUTIZVOYAPPROVAL_SRV.run(req.query)); 
}