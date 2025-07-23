class User < ApplicationRecord
  has_secure_password
  has_many :titles, dependent: :destroy

  normalizes :email_address, with: ->(e) { e.strip.downcase }
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
