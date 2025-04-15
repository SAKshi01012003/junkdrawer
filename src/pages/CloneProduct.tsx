
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const organizations = [
  { id: 1, name: 'apigee-prod-ouax' },
  { id: 2, name: 'apigee-non-prod-crjb' },
 
];

const CloneProduct = () => {
  const [sourceOrg, setSourceOrg] = useState("");
  const [targetOrg, setTargetOrg] = useState("");
  const [formData, setFormData] = useState({
    sourceToken: '',
    targetToken: '',
    productName: '',
    newProductName: '',
    newDisplayName: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!sourceOrg || !targetOrg) {
      toast.error('Please select both source and target organizations');
      return;
    }
    
    if (!formData.productName || !formData.newProductName) {
      toast.error('Product name fields are required');
      return;
    }
    
    // Simulate API call
    toast.promise(
      new Promise(resolve => setTimeout(resolve, 1500)),
      {
        loading: 'Cloning product...',
        success: 'Product successfully cloned!',
        error: 'Failed to clone product',
      }
    );
    
    console.log('Form submitted:', { ...formData, sourceOrg, targetOrg });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">Clone Product Across Orgs</h1>
      </div>
      
      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-white border-b">
          <CardTitle>Clone Product Across Organizations</CardTitle>
          <CardDescription>
            Clone a product from one organization to another with custom settings
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="sourceOrg" className="text-sm font-medium">
                  Source Organization
                </label>
                <Select value={sourceOrg} onValueChange={setSourceOrg}>
                  <SelectTrigger id="sourceOrg" className="w-full">
                    <SelectValue placeholder="Select source organization" />
                  </SelectTrigger>
                  <SelectContent>
                    {organizations.map((org) => (
                      <SelectItem key={org.id} value={org.id.toString()}>
                        {org.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="targetOrg" className="text-sm font-medium">
                  Target Organization
                </label>
                <Select value={targetOrg} onValueChange={setTargetOrg}>
                  <SelectTrigger id="targetOrg" className="w-full">
                    <SelectValue placeholder="Select target organization" />
                  </SelectTrigger>
                  <SelectContent>
                    {organizations.map((org) => (
                      <SelectItem key={org.id} value={org.id.toString()}>
                        {org.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="sourceToken" className="text-sm font-medium">
                  Source Token
                </label>
                <Input
                  id="sourceToken"
                  name="sourceToken"
                  placeholder="Enter source token"
                  value={formData.sourceToken}
                  onChange={handleChange}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="targetToken" className="text-sm font-medium">
                  Target Token
                </label>
                <Input
                  id="targetToken"
                  name="targetToken"
                  placeholder="Enter target token"
                  value={formData.targetToken}
                  onChange={handleChange}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            
    
            <div className="space-y-2">
              <label htmlFor="productName" className="text-sm font-medium">
                Existing Product Name
              </label>
              <Input
                id="productName"
                name="productName"
                placeholder="Enter product name"
                value={formData.productName}
                onChange={handleChange}
                className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="newProductName" className="text-sm font-medium">
                  New Product Name
                </label>
                <Input
                  id="newProductName"
                  name="newProductName"
                  placeholder="Enter new product name"
                  value={formData.newProductName}
                  onChange={handleChange}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="newDisplayName" className="text-sm font-medium">
                  New Product Display Name
                </label>
                <Input
                  id="newDisplayName"
                  name="newDisplayName"
                  placeholder="Enter new display name"
                  value={formData.newDisplayName}
                  onChange={handleChange}
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter product description"
                value={formData.description}
                onChange={handleChange}
                className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            
            <div className="pt-2">
              <Button 
                type="submit" 
                className="bg-navy hover:bg-navy-200 transition-colors duration-300"
              >
                Clone Product
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CloneProduct;
