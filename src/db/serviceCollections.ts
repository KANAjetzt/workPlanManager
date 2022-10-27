import db from '$db/mongo';

// export const create_collection_plans = db.createCollection('plans', {
// 	validator: {
// 		$jsonSchema: {
// 			bsonType: 'object',
// 			title: 'Plans Object Validation',
// 			required: ['title', 'welcome_message', 'urls'],
// 			properties: {
// 				title: {
// 					bsonType: 'string',
// 					description: "'title' must be a string and is required"
// 				},
// 				welcome_messages: {
// 					bsonType: 'object',
// 					title: 'Welcome Messages',
// 					description: "'welcome_message' must be a object and is required",
// 					required: ['admin', 'user'],
// 					properties: {
// 						admin: {
// 							bsonType: 'object',
// 							title: 'Welcome Messages Admin',
// 							description: "'admin' must be a object and is required",
// 							required: ['title', 'description'],
// 							properties: {
// 								heading: {
// 									bsonType: 'string',
// 									description: "'heading' must be a string and is required"
// 								},
// 								description: {
// 									bsonType: 'string',
// 									description: "'description' must be a string and is required"
// 								}
// 							}
// 						},
// 						user: {
// 							bsonType: 'object',
// 							title: 'Welcome Messages User',
// 							description: "'user' must be a object and is required",
// 							required: ['title', 'description'],
// 							properties: {
// 								heading: {
// 									bsonType: 'string',
// 									description: "'heading' must be a string and is required"
// 								},
// 								description: {
// 									bsonType: 'string',
// 									description: "'description' must be a string and is required"
// 								}
// 							}
// 						}
// 					}
// 				},
// 				urls: {
// 					bsonType: 'object',
// 					title: 'urls',
// 					description: "'urls' must be a object and is required",
// 					required: ['admin', 'share'],
// 					properties: {
// 						admin: {
// 							bsonType: 'string',
// 							// format: 'hostname',
// 							description: "'admin' must be a string of format hostname and is required"
// 						},
// 						share: {
// 							bsonType: 'string',
// 							// format: 'hostname',
// 							description: "'share' must be a string of format hostname and is required"
// 						}
// 					}
// 				},
// 				dates: {
// 					bsonType: 'array',
// 					description: "'dates' must be a array of objects and is required",
// 					// required: [],
// 					items: {
// 						bsonType: 'object',
// 						title: 'date',
// 						description: "'date' must be a object",
// 						required: ['title', 'date', 'locations'],
// 						properties: {
// 							title: {
// 								bsonType: 'string',
// 								description: "'title' must be a string and is required"
// 							},
// 							date: {
// 								bsonType: 'string',
// 								// format: 'date',
// 								description:
// 									"'date' must be a string in ISO8601 date format - for example, 2018-11-13 and is required"
// 							},
// 							locations: {
// 								bsonType: 'array',
// 								description: "'locations' must be a array and is required",
// 								// required: [],
// 								items: {
// 									bsonType: 'object',
// 									title: 'Location',
// 									description: "'location' must be a object",
// 									required: ['title', 'times'],
// 									properties: {
// 										title: {
// 											bsonType: 'string',
// 											description: "'title' must be a string and is required"
// 										},
// 										times: {
// 											bsonType: 'array',
// 											description: "'times' must be a array and is required",
// 											// required: [],
// 											items: {
// 												bsonType: 'object',
// 												title: 'time',
// 												description: "'time' must be a object",
// 												required: ['title', 'time', 'person_count'],
// 												properties: {
// 													title: {
// 														bsonType: 'string',
// 														description: "'title' must be a string and is required"
// 													},
// 													time: {
// 														bsonType: 'string',
// 														// format: 'date',
// 														description:
// 															"'time' must be a string in ISO8601 time format - for example, 20:20:39+00:00 and is required"
// 													},
// 													person_count: {
// 														bsonType: 'object',
// 														description: "'person_count' must be a object and is required",
// 														required: ['current', 'needed'],
// 														properties: {
// 															current: {
// 																bsonType: 'int',
// 																description: "'current' must be a int"
// 															},
// 															needed: {
// 																bsonType: 'int',
// 																description: "'needed' must be a int"
// 															}
// 														}
// 													},
// 													persons: {
// 														bsonType: 'array',
// 														description: "'persons' must be a array of objectIds",
// 														items: {
// 															bsonType: 'objectId'
// 														}
// 													}
// 												}
// 											}
// 										}
// 									}
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// });

// export const create_collection_persons = db.createCollection('users', {
// 	validator: {
// 		$jsonSchema: {
// 			bsonType: 'object',
// 			title: 'Users Object Validation',
// 			required: ['name', 'url'],
// 			properties: {
// 				name: {
// 					bsonType: 'string',
// 					description: "'name' must be a string and is required"
// 				},
// 				url: {
// 					bsonType: 'string',
// 					// format: 'hostname',
// 					description: "'url' must be a string of format hostname and is required"
// 				},
// 				times: {
// 					bsonType: 'array',
// 					description: "'times' must be a array of objectIds",
// 					items: {
// 						bsonType: 'objectId'
// 					}
// 				}
// 			}
// 		}
// 	}
// });

export function update_collection_plans() {
	return db.command({
		collMod: 'plans',
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				title: 'Plans Object Validation',
				required: ['title', 'welcome_messages', 'urls'],
				properties: {
					title: {
						bsonType: 'string',
						description: "'title' must be a string and is required"
					},
					welcome_messages: {
						bsonType: 'object',
						title: 'Welcome Messages',
						description: "'welcome_message' must be a object and is required",
						required: ['admin', 'user'],
						properties: {
							admin: {
								bsonType: 'object',
								title: 'Welcome Messages Admin',
								description: "'admin' must be a object and is required",
								required: ['heading', 'description'],
								properties: {
									heading: {
										bsonType: 'string',
										description: "'heading' must be a string and is required"
									},
									description: {
										bsonType: 'string',
										description: "'description' must be a string and is required"
									}
								}
							},
							user: {
								bsonType: 'object',
								title: 'Welcome Messages User',
								description: "'user' must be a object and is required",
								required: ['heading', 'description'],
								properties: {
									heading: {
										bsonType: 'string',
										description: "'heading' must be a string and is required"
									},
									description: {
										bsonType: 'string',
										description: "'description' must be a string and is required"
									}
								}
							}
						}
					},
					urls: {
						bsonType: 'object',
						title: 'urls',
						description: "'urls' must be a object and is required",
						required: ['admin', 'share'],
						properties: {
							admin: {
								bsonType: 'string',
								// format: 'hostname',
								description: "'admin' must be a string of format hostname and is required"
							},
							share: {
								bsonType: 'string',
								// format: 'hostname',
								description: "'share' must be a string of format hostname and is required"
							}
						}
					},
					dates: {
						bsonType: 'array',
						description: "'dates' must be a array of objects and is required",
						// required: [],
						items: {
							bsonType: 'object',
							title: 'date',
							description: "'date' must be a object",
							required: ['title', 'date', 'locations'],
							properties: {
								title: {
									bsonType: 'string',
									description: "'title' must be a string and is required"
								},
								date: {
									bsonType: 'string',
									// format: 'date',
									description:
										"'date' must be a string in ISO8601 date format - for example, 2018-11-13 and is required"
								},
								locations: {
									bsonType: 'array',
									description: "'locations' must be a array and is required",
									// required: [],
									items: {
										bsonType: 'object',
										title: 'Location',
										description: "'location' must be a object",
										required: ['title', 'times'],
										properties: {
											title: {
												bsonType: 'string',
												description: "'title' must be a string and is required"
											},
											times: {
												bsonType: 'array',
												description: "'times' must be a array and is required",
												// required: [],
												items: {
													bsonType: 'object',
													title: 'time',
													description: "'time' must be a object",
													required: ['title', 'time', 'person_count'],
													properties: {
														title: {
															bsonType: 'string',
															description: "'title' must be a string and is required"
														},
														time: {
															bsonType: 'string',
															// format: 'date',
															description:
																"'time' must be a string in ISO8601 time format - for example, 20:20:39+00:00 and is required"
														},
														person_count: {
															bsonType: 'object',
															description: "'person_count' must be a object and is required",
															required: ['current', 'needed'],
															properties: {
																current: {
																	bsonType: 'int',
																	description: "'current' must be a int"
																},
																needed: {
																	bsonType: 'int',
																	description: "'needed' must be a int"
																}
															}
														},
														persons: {
															bsonType: 'array',
															description: "'persons' must be a array of objectIds",
															items: {
																bsonType: 'objectId'
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
}
