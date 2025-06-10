import { supabase } from '../lib/supabase';
import { type CartItem

interface OrderData {
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  product_id: string;
  quantity: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  payment_status: 'pending' | 'paid' | 'failed';
}

export const createOrder = async (orderData: OrderData) => {
  const { data, error } = await supabase
    .from('orders')
    .insert(orderData)
    .select();

  if (error) {
    console.error('Error creating order:', error);
    throw error;
  }

  return data?.[0];
};

export const updateOrderStatus = async (orderId: string, status: 'pending' | 'paid' | 'failed') => {
  const { data, error } = await supabase
    .from('orders')
    .update({ payment_status: status })
    .eq('id', orderId)
    .select();

  if (error) {
    console.error('Error updating order status:', error);
    throw error;
  }

  return data?.[0];
};

export const getOrderById = async (orderId: string) => {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', orderId)
    .single();

  if (error) {
    console.error('Error fetching order:', error);
    throw error;
  }

  return data;
};