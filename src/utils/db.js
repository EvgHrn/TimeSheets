

class Db {
	static getData = async () => {
		const response = await fetch(`https://${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_DB_PORT}/gettimesheets`);
		const dataJson = await response.json();

		// const data = [
		// 	{
		// 		userId: "1514",
		// 		userName: "Евгений Хайдаршин",
		// 		orderNumber: 288501,
		// 		count: 20,
		// 		dateTime: new Date('1995-12-17T03:24:00')
		// 	}, {
		// 		userId: "1514",
		// 		userName: "Евгений Хайдаршин",
		// 		orderNumber: 288501,
		// 		count: 10,
		// 		dateTime: new Date('1995-12-17T05:00:00')
		// 	},
		// 	{
		// 		userId: "1514",
		// 		userName: "Евгений Хайдаршин",
		// 		orderNumber: 288502,
		// 		count: 4,
		// 		dateTime: new Date('1995-12-17T06:44:00')
		// 	}
		// ];
		console.log("Got data: ", dataJson);
		return dataJson;
	}
}

export default Db;