describe('Reqres API Testing',()=>{

  it('Get User List',()=>{

    cy.request({
      method:'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response)=>{
      expect(response.status).to.equal(200)
    })
  })

  it('Get Single User',()=>{
   
    cy.request({
      method:'GET',
      url:'https://reqres.in/api/users/2'
    }).then((response)=>{
      expect(response.status).to.equal(200)
    })  
  })




})