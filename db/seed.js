use tools

u1 = db.users.insertOne( {
	'email': "buck.i.jim@gmail.com",
	'encrypted_password': "$2a$10$7WbxUEFspw/ayNX32fwhfeM5TaH1COmAwMXGjquvY089ICSggqmy.",
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
      'kind': "Stand/Table",
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
acct2_0 = db.tools.insertOne({
      'brand': "Dewalt",
      'kind': "Stand/Table",
      'description': "Heavy Duty Miter Saw Stand",
      'model': "DWX723",
      'parent_tool_id':t2.insertedId,
      'owner_id': u2.insertedId
})



t3 = db.tools.insertOne({
      'brand': "Ridgid",
      'kind': "Sander",
      'description': "3 x 18 Variable Speed Belt Sander",
      'model': "R27401",
      'pic': "http://www.homedepot.com/catalog/productImages/400/51/511184b9-72e0-4c3f-b16a-8cabab93ef98_400.jpg",
      'purchase_location': "Home Depot",
      'notes': "Be careful! Removes material very fast. Go steady in one direction instead of back and forth to avoid gouges.",
      'owner_id': u1.insertedId
})



t4 = db.tools.insertOne({
      'brand': "Bosch",
      'kind': "Router",
      'description': "120-Volt Variable-Speed Plunge Router",
      'model': "1619EVS",
      'pic': "http://www.homedepot.com/catalog/productImages/400/ba/bae34eb9-110a-4607-bf47-4a408cec0e7b_400.jpg",
      'purchase_location': "Home Depot",
      'owner_id': u1.insertedId
})
acc_t4_0 = db.tools.insertOne({
      'brand': "Skil",
      'kind': "Drill Bits",
      'description': "Carbide Router 30-Bit Set",
      'model': "91030",
      'pic': "http://www.homedepot.com/catalog/productImages/400/00/00796c21-0db9-4c23-b84b-ac8064043aa0_400.jpg",
      'purchase_location': "Lowes",
      'notes': "Lost 1 bit",
			'parent_tool_id':t4.insertedId,
      'owner_id': u1.insertedId
})
acc_t4_1 = db.tools.insertOne({
      'brand': "Vermont American",
      'kind': "Drill Bits",
      'description': "Carbide Router Bit Set (12-piece)",
      'model': "23002",
      'pic': "http://www.homedepot.com/catalog/productImages/400/3c/3c539181-beda-46e3-8618-e8a54379943d_400.jpg",
      'purchase_location': "Home Depot",
			'parent_tool_id':t4.insertedId,
      'owner_id': u1.insertedId
})



t5 = db.tools.insertOne({
      'brand': "Shopsmith",
      'kind': "Multipurpose",
      'description': "Mark7 Multipurpose Machine",
      'model': "Mark7",
      'pic': "http://www.shopsmith.com/markvsite/images/mark7_features.jpg",
      'notes': "Table saw, lathe, drill press, disc sander, table router, table shaper, boring",
      'owner_id': u1.insertedId
})



t6 = db.tools.insertOne({
      'brand': "Porter-Cable",
      'kind': "Air Compressor",
      'description': "6 Gal. Portable Compressor",
      'model': "PCFP12236",
      'pic': "http://www.homedepot.com/catalog/productImages/400/a4/a45d0056-684b-4bd3-95ee-124988847ac5_400.jpg",
      'purchase_location': "Ace Hardware",
      'owner_id': u2.insertedId
})
