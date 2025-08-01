import { useState } from "react";
import { useAddProductMutation } from "../../store/api/productsApi";
function ProductForm({ onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    flavor: "",
    description: "",
    price: "",
    size: "",
    stock: "",
    imageUrl: "",
  });
  const [errors, setErrors] = useState({});

  const [addProduct] = useAddProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const newErrors = {};

      if (!formData.name.trim()) {
        newErrors.name = "Product name is required";
      }

      if (!formData.price) {
        newErrors.price = "Price is required";
      } else if (parseFloat(formData.price) <= 0) {
        newErrors.price = "Price must be greater than 0";
      }

      if (!formData.size.trim()) {
        newErrors.size = "Size is required";
      }

      if (!formData.stock) {
        newErrors.stock = "Price is required";
      } else if (parseInt(formData.stock) <= 0) {
        newErrors.stock = "Price must be greater than 0";
      }
      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0) {
        setIsLoading(false);
        return;
      }

      //valid
      let result;

      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
      };

      result = await addProduct(productData).unwrap();
      console.log(result);

      // Reset form
      setFormData({
        name: "",
        flavor: "",
        description: "",
        price: "",
        size: "",
        stock: "",
        imageUrl: "",
      });

      // Clear errors
      setErrors({});
      onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    //validations
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="modal-header bg-success border-0 p-4 ">
              <h5 className="modal-title">
                <i className={`bi bi-pencil-square me-2 `}></i>
                Add New Product
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body p-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-4">
                    <label className="form-label">
                      <i className="bi bi-tag me-2 text-success"></i>
                      Product Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Name..."
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <div className="invalid-feedback">{errors.name}</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-4">
                    <label className="form-label">
                      <i className="bi bi-collection me-2 text-success"></i>
                      Flavors
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Flavors (comma separated)..."
                      name="flavor"
                      value={formData.flavor}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label">
                  <i className="bi bi-file-text me-2 text-success"></i>
                  Description
                </label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Enter product description..."
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      <i className="bi bi-currency-dollar me-2 text-success"></i>
                      Price *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        step="0.01"
                        className={`form-control ${
                          errors.price ? "is-invalid" : ""
                        }`}
                        placeholder="0.00"
                        name="price"
                        min="0"
                        value={formData.price}
                        onChange={handleInputChange}
                      />
                      <div className="invalid-feedback">{errors.price}</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      <i className="bi bi-rulers me-2 text-success"></i>
                      Size *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.size ? "is-invalid" : ""
                      }`}
                      placeholder="Size..."
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                    />

                    <div className="invalid-feedback">{errors.size}</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-4">
                    <label className="form-label">
                      <i className="bi bi-boxes me-2 text-success"></i>
                      Stock Quantity *
                    </label>
                    <input
                      type="number"
                      className={`form-control ${
                        errors.stock ? "is-invalid" : ""
                      }`}
                      placeholder="0"
                      name="stock"
                      min="0"
                      value={formData.stock}
                      onChange={handleInputChange}
                    />
                    <div className="invalid-feedback">{errors.stock}</div>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <i className="bi bi-image me-2 text-success"></i>
                  Image URL
                </label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://example.com/image.jpg"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="modal-footer border-0 p-4">
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                onClick={onClose}
              >
                <i className="bi bi-x-circle me-2"></i>
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-success px-4"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    Adding Product...
                  </>
                ) : (
                  <>
                    <i className="bi bi-check-circle me-2"></i>
                    Add Product
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
