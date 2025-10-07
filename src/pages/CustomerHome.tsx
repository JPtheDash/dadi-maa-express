"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";

// Mock data for kitchens
const mockKitchens = [
  {
    id: 1,
    name: "Priya's Kitchen",
    owner: "Priya Sharma",
    type: "Veg",
    items: "Veg Thali - 5 items",
    price: 150,
    rating: 4.8,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "Meera's Homemade",
    owner: "Meera Patel",
    type: "Pure Veg",
    items: "Pure Veg Thali - 7 items",
    price: 180,
    rating: 4.9,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 3,
    name: "Rani's Recipes",
    owner: "Rani Desai",
    type: "Non-Veg",
    items: "Non-Veg Thali - 6 items",
    price: 220,
    rating: 4.7,
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 4,
    name: "Sunita's Sweets",
    owner: "Sunita Reddy",
    type: "Dessert",
    items: "Traditional Desserts",
    price: 120,
    rating: 4.9,
    image: "/placeholder.svg?height=100&width=100"
  }
];

const CustomerHome = () => {
  const [selectedKitchen, setSelectedKitchen] = useState<any>(null);
  const [mealCount, setMealCount] = useState(1);
  const [deliveryTime, setDeliveryTime] = useState("12:00 PM");

  const handleOrder = () => {
    if (selectedKitchen) {
      toast.success(`Order placed for ${mealCount} ${selectedKitchen.name} meal(s) at ${deliveryTime}!`);
      setSelectedKitchen(null);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 p-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-orange-800 mb-2">Find Home-Cooked Meals</h1>
          <p className="text-orange-600">Delicious meals made with love by our Dadi Maas</p>
        </div>
        
        <Tabs defaultValue="veg" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-orange-100">
            <TabsTrigger value="veg" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Veg</TabsTrigger>
            <TabsTrigger value="non-veg" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Non-Veg</TabsTrigger>
            <TabsTrigger value="pure-veg" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Pure Veg</TabsTrigger>
            <TabsTrigger value="desserts" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">Desserts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="veg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {mockKitchens
                .filter(kitchen => kitchen.type === "Veg")
                .map(kitchen => (
                  <Card key={kitchen.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={kitchen.image} alt={kitchen.owner} />
                          <AvatarFallback>{kitchen.owner.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-lg">{kitchen.name}</h3>
                          <p className="text-sm text-gray-600">{kitchen.owner}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary">{kitchen.items}</Badge>
                        <span className="font-bold text-orange-600">₹{kitchen.price}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-sm">{kitchen.rating}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full bg-orange-600 hover:bg-orange-700"
                            onClick={() => setSelectedKitchen(kitchen)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Order Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Place Your Order</DialogTitle>
                            <DialogDescription>
                              Order from {kitchen.name}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="meals" className="text-right">
                                Meals
                              </Label>
                              <Input
                                id="meals"
                                type="number"
                                min="1"
                                value={mealCount}
                                onChange={(e) => setMealCount(parseInt(e.target.value) || 1)}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="time" className="text-right">
                                Time
                              </Label>
                              <Select value={deliveryTime} onValueChange={setDeliveryTime}>
                                <SelectTrigger className="col-span-3">
                                  <SelectValue placeholder="Select delivery time" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                                  <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                                  <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                                  <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="font-bold">Total: ₹{kitchen.price * mealCount}</p>
                            <Button 
                              type="submit" 
                              onClick={handleOrder}
                              className="bg-orange-600 hover:bg-orange-700"
                            >
                              Confirm Order
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="non-veg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {mockKitchens
                .filter(kitchen => kitchen.type === "Non-Veg")
                .map(kitchen => (
                  <Card key={kitchen.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={kitchen.image} alt={kitchen.owner} />
                          <AvatarFallback>{kitchen.owner.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-lg">{kitchen.name}</h3>
                          <p className="text-sm text-gray-600">{kitchen.owner}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary">{kitchen.items}</Badge>
                        <span className="font-bold text-orange-600">₹{kitchen.price}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-sm">{kitchen.rating}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full bg-orange-600 hover:bg-orange-700"
                            onClick={() => setSelectedKitchen(kitchen)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Order Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Place Your Order</DialogTitle>
                            <DialogDescription>
                              Order from {kitchen.name}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="meals" className="text-right">
                                Meals
                              </Label>
                              <Input
                                id="meals"
                                type="number"
                                min="1"
                                value={mealCount}
                                onChange={(e) => setMealCount(parseInt(e.target.value) || 1)}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="time" className="text-right">
                                Time
                              </Label>
                              <Select value={deliveryTime} onValueChange={setDeliveryTime}>
                                <SelectTrigger className="col-span-3">
                                  <SelectValue placeholder="Select delivery time" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                                  <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                                  <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                                  <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="font-bold">Total: ₹{kitchen.price * mealCount}</p>
                            <Button 
                              type="submit" 
                              onClick={handleOrder}
                              className="bg-orange-600 hover:bg-orange-700"
                            >
                              Confirm Order
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pure-veg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {mockKitchens
                .filter(kitchen => kitchen.type === "Pure Veg")
                .map(kitchen => (
                  <Card key={kitchen.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={kitchen.image} alt={kitchen.owner} />
                          <AvatarFallback>{kitchen.owner.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-lg">{kitchen.name}</h3>
                          <p className="text-sm text-gray-600">{kitchen.owner}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary">{kitchen.items}</Badge>
                        <span className="font-bold text-orange-600">₹{kitchen.price}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-sm">{kitchen.rating}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full bg-orange-600 hover:bg-orange-700"
                            onClick={() => setSelectedKitchen(kitchen)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Order Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Place Your Order</DialogTitle>
                            <DialogDescription>
                              Order from {kitchen.name}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="meals" className="text-right">
                                Meals
                              </Label>
                              <Input
                                id="meals"
                                type="number"
                                min="1"
                                value={mealCount}
                                onChange={(e) => setMealCount(parseInt(e.target.value) || 1)}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="time" className="text-right">
                                Time
                              </Label>
                              <Select value={deliveryTime} onValueChange={setDeliveryTime}>
                                <SelectTrigger className="col-span-3">
                                  <SelectValue placeholder="Select delivery time" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                                  <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                                  <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                                  <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="font-bold">Total: ₹{kitchen.price * mealCount}</p>
                            <Button 
                              type="submit" 
                              onClick={handleOrder}
                              className="bg-orange-600 hover:bg-orange-700"
                            >
                              Confirm Order
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="desserts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {mockKitchens
                .filter(kitchen => kitchen.type === "Dessert")
                .map(kitchen => (
                  <Card key={kitchen.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="p-0">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center mb-2">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={kitchen.image} alt={kitchen.owner} />
                          <AvatarFallback>{kitchen.owner.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-lg">{kitchen.name}</h3>
                          <p className="text-sm text-gray-600">{kitchen.owner}</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary">{kitchen.items}</Badge>
                        <span className="font-bold text-orange-600">₹{kitchen.price}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-sm">{kitchen.rating}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full bg-orange-600 hover:bg-orange-700"
                            onClick={() => setSelectedKitchen(kitchen)}
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Order Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Place Your Order</DialogTitle>
                            <DialogDescription>
                              Order from {kitchen.name}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="meals" className="text-right">
                                Meals
                              </Label>
                              <Input
                                id="meals"
                                type="number"
                                min="1"
                                value={mealCount}
                                onChange={(e) => setMealCount(parseInt(e.target.value) || 1)}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="time" className="text-right">
                                Time
                              </Label>
                              <Select value={deliveryTime} onValueChange={setDeliveryTime}>
                                <SelectTrigger className="col-span-3">
                                  <SelectValue placeholder="Select delivery time" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                                  <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                                  <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                                  <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="font-bold">Total: ₹{kitchen.price * mealCount}</p>
                            <Button 
                              type="submit" 
                              onClick={handleOrder}
                              className="bg-orange-600 hover:bg-orange-700"
                            >
                              Confirm Order
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomerHome;