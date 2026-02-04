import { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  TrendingUp,
  AlertTriangle,
  Plus,
  Pencil,
  Trash2,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { products as initialProducts, categories } from '@/data/products';
import type { Product } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

// Mock data for dashboard
const dashboardStats = {
  totalSales: 15890.50,
  ordersToday: 12,
  lowStockCount: 3,
  totalProducts: initialProducts.length,
};

const recentOrders = [
  { id: '001', customer: 'Maria Silva', total: 189.70, status: 'Enviado', date: '04/02/2026' },
  { id: '002', customer: 'João Santos', total: 94.90, status: 'Pendente', date: '04/02/2026' },
  { id: '003', customer: 'Ana Costa', total: 234.60, status: 'Processando', date: '03/02/2026' },
  { id: '004', customer: 'Pedro Lima', total: 59.90, status: 'Enviado', date: '03/02/2026' },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products'>('dashboard');
  const [productsList, setProductsList] = useState<Product[]>(initialProducts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    image: '',
    description: '',
  });

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price.toString(),
        stock: product.stock.toString(),
        image: product.image,
        description: product.description,
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        category: '',
        price: '',
        stock: '',
        image: '',
        description: '',
      });
    }
    setIsDialogOpen(true);
  };

  const handleSaveProduct = () => {
    const priceValue = parseFloat(formData.price);
    const stockValue = parseInt(formData.stock);

    if (!formData.name.trim() || formData.name.length > 100) {
      toast({ title: 'Erro', description: 'Nome inválido (máx 100 caracteres)', variant: 'destructive' });
      return;
    }
    if (!formData.category) {
      toast({ title: 'Erro', description: 'Selecione uma categoria', variant: 'destructive' });
      return;
    }
    if (isNaN(priceValue) || priceValue <= 0 || priceValue > 100000) {
      toast({ title: 'Erro', description: 'Preço inválido', variant: 'destructive' });
      return;
    }
    if (isNaN(stockValue) || stockValue < 0 || stockValue > 10000) {
      toast({ title: 'Erro', description: 'Estoque inválido', variant: 'destructive' });
      return;
    }

    if (editingProduct) {
      setProductsList(prev => prev.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...formData, price: priceValue, stock: stockValue }
          : p
      ));
      toast({ title: 'Produto atualizado com sucesso!' });
    } else {
      const newProduct: Product = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        category: formData.category,
        price: priceValue,
        stock: stockValue,
        image: formData.image || '/placeholder.svg',
        description: formData.description.trim(),
      };
      setProductsList(prev => [...prev, newProduct]);
      toast({ title: 'Produto adicionado com sucesso!' });
    }
    setIsDialogOpen(false);
  };

  const handleDeleteProduct = (id: string) => {
    setProductsList(prev => prev.filter(p => p.id !== id));
    toast({ title: 'Produto removido com sucesso!' });
  };

  const lowStockProducts = productsList.filter(p => p.stock <= 10);

  return (
    <main className="min-h-screen bg-secondary/30">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-primary min-h-screen p-6 hidden md:block">
          <h2 className="font-display text-xl text-accent mb-8">Admin</h2>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'dashboard' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'text-primary-foreground/70 hover:bg-primary-foreground/10'
              }`}
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'products' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'text-primary-foreground/70 hover:bg-primary-foreground/10'
              }`}
            >
              <Package className="h-5 w-5" />
              Produtos
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6 md:p-8">
          {/* Mobile Tabs */}
          <div className="md:hidden flex gap-2 mb-6">
            <Button
              variant={activeTab === 'dashboard' ? 'gold' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </Button>
            <Button
              variant={activeTab === 'products' ? 'gold' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('products')}
            >
              Produtos
            </Button>
          </div>

          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              <h1 className="font-display text-3xl">Dashboard</h1>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total de Vendas</p>
                      <p className="font-display text-2xl">{formatPrice(dashboardStats.totalSales)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-fresh/20 rounded-lg">
                      <ShoppingCart className="h-6 w-6 text-fresh" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pedidos Hoje</p>
                      <p className="font-display text-2xl">{dashboardStats.ordersToday}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-destructive/20 rounded-lg">
                      <AlertTriangle className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Estoque Baixo</p>
                      <p className="font-display text-2xl">{lowStockProducts.length}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Produtos</p>
                      <p className="font-display text-2xl">{productsList.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="font-display text-xl mb-4">Pedidos Recentes</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Pedido</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Data</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">#{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{formatPrice(order.total)}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Enviado' ? 'bg-fresh/20 text-fresh' :
                            order.status === 'Pendente' ? 'bg-accent/20 text-accent' :
                            'bg-primary/20 text-primary'
                          }`}>
                            {order.status}
                          </span>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Low Stock Alert */}
              {lowStockProducts.length > 0 && (
                <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                  <h2 className="font-display text-xl mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Produtos com Estoque Baixo
                  </h2>
                  <div className="space-y-2">
                    {lowStockProducts.map((product) => (
                      <div key={product.id} className="flex justify-between items-center py-2 border-b border-destructive/20 last:border-0">
                        <span>{product.name}</span>
                        <span className="text-destructive font-semibold">{product.stock} unidades</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="font-display text-3xl">Gerenciar Produtos</h1>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="gold" onClick={() => handleOpenDialog()} className="gap-2">
                      <Plus className="h-4 w-4" />
                      Novo Produto
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-display">
                        {editingProduct ? 'Editar Produto' : 'Novo Produto'}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="name">Nome</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          maxLength={100}
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Categoria</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat.id} value={cat.name}>
                                {cat.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="price">Preço (R$)</Label>
                          <Input
                            id="price"
                            type="number"
                            step="0.01"
                            min="0"
                            max="100000"
                            value={formData.price}
                            onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label htmlFor="stock">Estoque</Label>
                          <Input
                            id="stock"
                            type="number"
                            min="0"
                            max="10000"
                            value={formData.stock}
                            onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="image">URL da Imagem</Label>
                        <Input
                          id="image"
                          value={formData.image}
                          onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                          placeholder="https://..."
                        />
                      </div>
                      <div>
                        <Label htmlFor="description">Descrição</Label>
                        <Input
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                          maxLength={500}
                        />
                      </div>
                      <Button variant="gold" className="w-full" onClick={handleSaveProduct}>
                        {editingProduct ? 'Salvar Alterações' : 'Adicionar Produto'}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Products Table */}
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Produto</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead>Estoque</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {productsList.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <span className="font-medium">{product.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{formatPrice(product.price)}</TableCell>
                        <TableCell>
                          <span className={product.stock <= 10 ? 'text-destructive font-semibold' : ''}>
                            {product.stock}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleOpenDialog(product)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive hover:text-destructive"
                              onClick={() => handleDeleteProduct(product.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Admin;
