use tools

u1 = db.users.insertOne( {
	'email': "buck.i.jim@gmail.com",
	'encrypted_password': "$2a$10$vibmPbki3lXB61l4UyOL6OzNTXjFGyoAxe11X.YyAdhEKdbGbp7O2",
	'sign_in_count': 2,
	'failed_attempts': 2,
	'name': "Jim",
	'confirmation_token': "xwd9kGsrAyxSvQgJpi5v",
	'confirmation_sent_at': ISODate("2016-01-27T07:27:24.230Z"),
	'confirmed_at': ISODate("2016-01-27T07:36:54.317Z"),
	'last_sign_in_at': ISODate("2016-01-27T07:37:05.742Z"),
	'current_sign_in_at': ISODate("2016-01-29T01:33:52.949Z"),
	'last_sign_in_ip': "::1",
	'current_sign_in_ip': "::1"
} )


u2 = db.users.insertOne( {
	'email': "jim.a73@gmail.com",
	'encrypted_password': "$2a$10$nC.kvzjxKbpHv7YcWs9jP.K/E3RA0LGNYgT.G2WTAdPoX4FyocUeW",
	'sign_in_count': 6,
	'failed_attempts': 0,
	'provider': "facebook",
	'uid': "10208891333140034",
	'name': "Jim Armstrong",
	'confirmation_token': "x4W6qUosky_ivs2wWcGD",
	'confirmation_sent_at': ISODate("2016-01-29T02:13:13.737Z"),
	'confirmed_at': ISODate("2016-01-29T02:14:53.389Z"),
	'last_sign_in_at': ISODate("2016-01-29T02:43:14.843Z"),
	'current_sign_in_at': ISODate("2016-02-04T01:17:21.995Z"),
	'last_sign_in_ip': "::1",
	'current_sign_in_ip': "::1",
	'reset_password_token': "d55db8a366bc440ee0ba7d46282146f72161e3b28cb58c6201a07e1c678d37b7",
	'reset_password_sent_at': ISODate("2016-02-04T01:13:21.943Z")
} )

t1 = db.tools.insertOne({
      'brand': "Bosch",
      'kind': "Router Table",
      'description': "120V Corded 27x18 Benchtop Router Table",
      'model': "RA1181",
      'pic': "http://thumbs.ebaystatic.com/images/g/2K4AAOSwL7VWjgNk/s-l225.jpg",
      'purchase_location': "Home Depot",
      'notes': "lost the feather guard",
      'owner_id': u1.insertedId
})

t2 = db.tools.insertOne({
      'brand': "Dewalt",
      kind: "Miter Saw",
      'description': "15 Amp 12 in. Double-Bevel Compound Miter Saw",
      'model': "DW716",
      'notes': "haven't turned it on yet",
      'owner_id': u2.insertedId
})

acc1 = db.tools.insertOne({
      'brand': "Dewalt",
      'kind': "Stand/Table",
      'description': "Heavy Duty Miter Saw Stand",
      'model': "DWX723",
      'parent_tool_id':t2.insertedId,
      'owner_id': u2.insertedId
})


